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
    error_text: string
}

export class InputField extends Block {
  constructor(props: inputFieldProps, parent: Input) {
    super('input', {
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

  init() {
        this.element!.setAttribute('type', this.props.type);
        this.element!.classList.add(`${this.props.form_class}__input`);
        this.element!.setAttribute('name', this.props.name);
        this.element!.setAttribute('id', `${this.props.form_class}_${this.props.name}`);
        if (this.props.placeholder) {
            this.element!.setAttribute('placeholder', this.props.placeholder);
        }
  }

  protected render() {
    return this.compile(template, this.props);
  }

  get value() {
    return (this.element as HTMLInputElement).value;
  }
}
