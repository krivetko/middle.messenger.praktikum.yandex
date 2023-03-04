import Block from '../../utils/Block';
import template from './input.hbs';
import { InputError } from '../input_error/input_error';
import { InputField } from '../input_field/input_field';

export interface inputProps {
    form_class?: string,
    label: string,
    type: string,
    name: string,
    placeholder?: string
    class?: string,
    label_hidden?: boolean,
    error_text: string
}

export class Input extends Block<inputProps> {
  constructor(props: inputProps) {
    super('div', props);
  }

  init() {
    if (this.props.class) {
            this.element!.classList.add(this.props.class);
    }
    this.children.input_field = new InputField(this.props, this);
    this.children.input_error = new InputError({ error_text: this.props.error_text, show_error: false });
  }

  protected render() {
    return this.compile(template, this.props);
  }

  public fieldName(): string {
    return this.props.name;
  }

  public setValidateStatus(status: boolean) {
    const props = {
      show_error: status,
    };
    if ((this.children.input_field as InputField).value !== '') {
      (this.children.input_error as InputError).setProps(props);
      if (status) {
        (this.children.input_error as InputError).show();
      } else {
        (this.children.input_error as InputError).hide();
      }
    }
  }
}
