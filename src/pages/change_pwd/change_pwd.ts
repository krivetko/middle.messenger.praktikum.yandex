import template from './change_pwd.hbs';
import Block from '../../utils/Block';
import empty_avatar from '../../../static/icons/empty_avatar.png';
import { Form, formProps } from '../../components/form/form';
import { Button } from '../../components/button/button';

const pwd_change_context: formProps = {
  class: 'profile__fields',
  inputs: [
    {
      label: 'Старый пароль',
      name: 'oldPassword',
      type: 'password',
      class: 'profile__row',
      error_text: 'Пароль не соответствует требованиям',
    },
    {
      label: 'Новый пароль',
      name: 'newPassword',
      type: 'password',
      class: 'profile__row',
      error_text: 'Пароль не соответствует требованиям',
    },
    {
      label: 'Повторите новый пароль',
      name: 'newPasswordConfirmation',
      type: 'password',
      class: 'profile__row',
      error_text: 'Пароль не соответствует требованиям',
    },
  ],
};

export class PasswordChangePage extends Block {
  constructor() {
    super();
  }

  init() {
        this.element!.classList.add('profile_container');
        this.children.button = new Button({
          label: 'Сохранить', type: 'submit', class: 'save__button', form: 'profile__fields',
        });
        this.children.profile_fields = new Form(pwd_change_context);
  }

  protected render() {
    return this.compile(template, { avatar: empty_avatar });
  }
}
