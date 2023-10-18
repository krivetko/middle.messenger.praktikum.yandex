import Block from '../../utils/Block';
import template from './input_field.hbs';
import { Validator } from '../../utils/Validator';
import { Input } from '../input/input';

export interface inputFieldProps {
    form_class?: string,
    label: string,
    type: string,
    name: string,
    placeholder?: string
    class?: string,
    label_hidden?: boolean,
    error_text: string,
    hasError?: boolean,
    events?: Record<string, (event: Event) => void>
}

export class InputField extends Block<inputFieldProps> {
  constructor(props: inputFieldProps, parent: Input) {
    super({
      ...props,
      hasError: false,
      events: {
        focus: (event: Event) => {
          const validator = new Validator();
          parent.setValidateStatus(!validator.validateExactField((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value));
        },
        blur: (event: Event) => {
          const validator = new Validator();
          parent.setValidateStatus(!validator.validateExactField((event.target as HTMLInputElement).name, (event.target as HTMLInputElement).value));
        },
      },
    });
  }

  protected render() {
    return this.compile(template, this.props);
  }

  get value() {
    return (this.element as HTMLInputElement).value;
  }
}
