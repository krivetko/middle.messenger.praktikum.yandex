import { v4 as makeUUID } from 'uuid';
import { EventBus } from './EventBus';
import { TemplateDelegate } from 'handlebars';

type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export default class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };
  
  public id = makeUUID();

  protected props: Props<P>;

  public children: Record<string, Block> | Record<string, Block[]>;

  private _element: null | HTMLElement = null;

  private eventBus: EventBus;

  constructor(propsWithChildren: P) {
    const eventBus = new EventBus();
    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: any) {
    const props: P = {} as P;
    const children: Record<string, Block> | Record<string, Block[]> = {};
    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0 && value.every((element) => element instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key as keyof P] = value as P[keyof P];
      }
    });
    return { props, children };
  }

  private _addEvents() {
    const { events = {} } = this.props as P & {events: Record<string, () => void>};
    Object.keys(events).forEach((event) => {
      this._element?.addEventListener(event, events[event]);
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props as {events: Record<string, () => void>};
    Object.keys(events).forEach((event) => {
      this._element?.removeEventListener(event, events[event]);
    });
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(ch => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._removeEvents();
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P) {
    return oldProps !== newProps;
  }

  public setProps = (nextProps: Partial<P>) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();
    const newElement = block.firstElementChild as HTMLElement;

    if (this._element && newElement) {
      this._element.replaceWith(newElement);
    } else {
      this._element = newElement;
    }
    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  protected compile(template: TemplateDelegate, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map((child) => `<div data-id="${child.id}"></div>`);
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    const replaceStub = (component: Block) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    }

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: P) {
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        if (target[prop as keyof P]) {
          const value = target[prop as keyof P];
          return typeof value === 'function' ? value.bind(self) : value;
        }
      },
      set(target, prop, value) {
        if (target[prop as keyof P] && target[prop as keyof P] !== value) {
          const oldProp = target[prop as keyof P];
          target[prop as keyof P] = value;
          self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProp, value);
        }
        return true;
      },
      deleteProperty(target, prop) {
        throw new Error(`нет доступа: ${String(target)} ${String(prop)}`);
      },
    });
  }

  public show() {
    this.getContent()!.style.display = 'block';
  }

  public hide() {
    this.getContent()!.style.display = 'none';
  }
}
