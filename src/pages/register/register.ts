import template from './register.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/button/button';
import { Form, formProps } from '../../components/form/form';

const register_context: formProps = {
  class: 'form__register',
  inputs: [
    {
      label: 'Почта',
      placeholder: 'Почта',
      name: 'email',
      type: 'text',
      label_hidden: true,
      error_text: 'Введите корректный адрес почты',
    },
    {
      label: 'Логин',
      placeholder: 'Логин',
      name: 'login',
      type: 'text',
      label_hidden: true,
      error_text: 'Введите корректный логин',
    },
    {
      label: 'Имя',
      placeholder: 'Имя',
      name: 'first_name',
      type: 'text',
      label_hidden: true,
      error_text: 'Введите корректное имя',
    },
    {
      label: 'Фамилия',
      placeholder: 'Фамилия',
      name: 'second_name',
      type: 'text',
      label_hidden: true,
      error_text: 'Введите корректную фамилию',
    },
    {
      label: 'Телефон',
      placeholder: 'Телефон',
      name: 'phone',
      type: 'text',
      label_hidden: true,
      error_text: 'Введите корректный номер телефона',
    },
    {
      label: 'Пароль',
      placeholder: 'Пароль',
      name: 'password',
      type: 'password',
      label_hidden: true,
      error_text: 'Пароль не соответствует требованиям',
    },
    {
      label: 'Пароль (ещё раз)',
      placeholder: 'Пароль (ещё раз)',
      name: 'confirm_password',
      type: 'password',
      label_hidden: true,
      error_text: 'Пароль не соответствует требованиям',
    },
  ],
};

export class RegisterPage extends Block {
  constructor() {
    super();
  }

  init() {
       this.element!.classList.add('register_container');
       this.children.register_form = new Form(register_context);
       this.children.button = new Button({
         class: 'register__button', label: 'Зарегистрироваться', type: 'submit', form: 'form__register',
       });
  }

  protected render() {
    return this.compile(template, {});
  }
}
