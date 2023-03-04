import template from './auth.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/button/button';
import { Form, formProps } from '../../components/form/form';

const auth_context: formProps = {
  class: 'form__auth',
  inputs: [
    {
      label: 'Логин',
      placeholder: 'Логин',
      name: 'login',
      type: 'text',
      label_hidden: true,
      error_text: 'Введите корректный логин',
    },
    {
      label: 'Пароль',
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
      label_hidden: true,
      error_text: 'Пароль не соответствует требованиям',
    },
  ],
};

export class AuthPage extends Block {
  constructor() {
    super();
  }

  init() {
       this.element!.classList.add('auth_container');
       this.children.auth_form = new Form({...auth_context, submit_button: new Button({
        class: 'auth__button', label: 'Авторизоваться', type: 'submit', form: 'form__auth',
      })});
  }

  protected render() {
    return this.compile(template, {});
  }
}
