import Block from '../../utils/Block';
import { Error, ErrorProps } from '../../components/error/error';
import template from './500.hbs';

const error500: ErrorProps = {
  code: 500,
  description: 'Мы уже фиксим',
};

export class Page5xx extends Block {
  constructor() {
    super({});
  }

  init() {
       this.element!.classList.add('error_container');
       this.children.Error = new Error(error500);
  }

  protected render() {
    return this.compile(template, this.props);
  }
}
