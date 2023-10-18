import Block from '../../utils/Block';
import template from './input_error.hbs';

export interface inputErrorProps {
    error_text: string,
    show_error: boolean,
}

export class InputError extends Block<inputErrorProps> {
  constructor(props: inputErrorProps) {
    super(props);
  }

  protected render() {
    return this.compile(template, this.props);
  }
  
  show() {
    this.getContent()!.style.display = 'block';
    this.getContent()!.style.position = 'absolute';
  }
}
