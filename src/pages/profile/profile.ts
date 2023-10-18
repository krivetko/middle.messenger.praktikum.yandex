import template from './profile.hbs';
import Block from '../../utils/Block';
import empty_avatar from '../../../static/icons/empty_avatar.png';
import { Form, formProps } from '../../components/form/form';

const profile_context: formProps = {
  class: 'profile__fields',
  inputs: [
    {
      label: 'Почта',
      name: 'email',
      type: 'text',
      placeholder: 'pochta@yandex.ru',
      class: 'profile__row',
      error_text: 'Введите корректный адрес почты',
    },
    {
      label: 'Логин',
      name: 'login',
      type: 'text',
      placeholder: 'ivanivanov',
      class: 'profile__row',
      error_text: 'Введите корректный логин',
    },
    {
      label: 'Имя',
      name: 'first_name',
      type: 'text',
      placeholder: 'Иван',
      class: 'profile__row',
      error_text: 'Введите корректное имя',
    },
    {
      label: 'Фамилия',
      name: 'second_name',
      type: 'text',
      placeholder: 'Иванов',
      class: 'profile__row',
      error_text: 'Введите корректную фамилию',
    },
    {
      label: 'Имя в чате',
      name: 'display_name',
      type: 'text',
      placeholder: 'Иван',
      class: 'profile__row',
      error_text: '',
    },
    {
      label: 'Телефон',
      name: 'phone',
      type: 'text',
      placeholder: '+7 (909) 967 30 30',
      class: 'profile__row',
      error_text: 'Введите корректный номер телефона',
    }],
};

export class ProfilePage extends Block {
  constructor() {
    super({});
  }

  init() {
        this.element!.classList.add('profile_container');
        this.children.profile_fields = new Form(profile_context);
  }

  protected render() {
    return this.compile(template, { avatar: empty_avatar, nickname: 'Иван' });
  }
}
