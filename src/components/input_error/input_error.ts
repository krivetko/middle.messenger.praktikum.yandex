import Block from '../../utils/Block';
import template from './input_error.hbs';

export interface inputErrorProps {
    error_text: string,
    show_error: boolean,
}

export class InputError extends Block {
  constructor(props: inputErrorProps) {
    super('div', props);
  }

  init() {
        this.element!.classList.add('input__error');
        if (this.props.show_error) {
            this.element!.style.display = 'block';
        } else {
            this.element!.style.display = 'none';
        }
  }

  protected render() {
    return this.compile(template, this.props);
  }
}
