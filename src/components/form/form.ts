import Block from '../../utils/Block';
import { Input, inputProps } from '../input/input';
import template from './form.hbs';
import { Validator } from '../../utils/Validator';
import { InputError } from '../input_error/input_error';
import { Button } from '../button/button';

export interface formProps {
    class: string,
    inputs: inputProps[],
    events?: Record<string, (event: Event) => void>,
    submit_button?: Button;
}

export class Form extends Block<formProps> {
  constructor(props: formProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          const validator = new Validator();
          console.log(validator.submittedData(event.target as HTMLElement));
          const errorFields = validator.validateFields(event.target as HTMLElement);
          for (const input of (this.children.inputs as Input[])) {
            if (errorFields.includes(input.fieldName())) {
              (input.children.input_error as InputError).show();
            } else {
              (input.children.input_error as InputError).hide();
            }
          }
        },
      },
    });
  }

  init() {
        this.element!.classList.add(this.props.class);
        this.element!.setAttribute('id', this.props.class);
        const inputs: Input[] = [];
        this.props.inputs.forEach((element: inputProps) => inputs.push(new Input({ ...element, form_class: this.props.class })));
        this.children.inputs = inputs;
        if (this.props.submit_button) {
          this.children.submit_button = this.props.submit_button;
        }
  }

  protected render() {
    return this.compile(template, this.props);
  }
}
