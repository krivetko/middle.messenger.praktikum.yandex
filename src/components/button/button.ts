import Block from '../../utils/Block';
import template from './button.hbs';

export interface buttonProps {
    label: string,
    class: string,
    type: string,
    form?: string
}

export class Button extends Block<buttonProps> {
  constructor(props: buttonProps) {
    super('button', props);
  }

  init() {
        this.element!.classList.add(this.props.class);
        this.element!.setAttribute('type', this.props.type);
        if (this.props.form) {
          this.element!.setAttribute('form', this.props.form);
        }
  }

  protected render() {
    return this.compile(template, this.props);
  }
}
