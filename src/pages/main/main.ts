import Block from '../../utils/Block';
import { SidePanel } from '../../components/sidepanel/sidepanel';
import template from './main.hbs';
import { RightPanel } from '../../components/rightpanel/rightpanel';
export class MainPage extends Block {
  constructor() {
    super({});
  }

  init() {
       this.element!.classList.add('ui');
       this.children.sidePanel = new SidePanel();
       this.children.rightPanel = new RightPanel();
  }

  protected render() {
    return this.compile(template, {});
  }
}
