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
    super(props);
  }

  protected render() {
    return this.compile(template, this.props);
  }
}
