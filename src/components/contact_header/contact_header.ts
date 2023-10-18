import Block from '../../utils/Block';
import template from './contact_header.hbs';

export class ContactHeader extends Block {
  constructor() {
    super({});
  }

  init() {
       this.element!.classList.add('ui__conversation__header');
  }

  protected render() {
    return this.compile(template, {});
  }
}
