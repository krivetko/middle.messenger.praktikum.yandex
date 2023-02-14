import template from "./profile.hbs";
import template_change_pwd from "./change_pwd.hbs";
import empty_avatar from '../../../static/icons/empty_avatar.png';
import Handlebars from "handlebars/dist/handlebars.runtime";
import form from "../../components/form/form.hbs";
import button from "../../components/button/button.hbs";
Handlebars.registerPartial('form', form);
Handlebars.registerPartial('button', button);

const profile_context = {
    avatar: empty_avatar,
    fields: [
        {
            label: 'Почта',
            name: 'email',
            type: 'text',
            placeholder: 'pochta@yandex.ru'
        },
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            placeholder: 'ivanivanov'
        },
        {
            label: 'Имя',
            name: 'first_name',
            type: 'text',
            placeholder: 'Иван'
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            type: 'text',
            placeholder: 'Иванов'
        },
        {
            label: 'Имя в чате',
            name: 'nickname',
            type: 'text',
            placeholder: 'Иван'
        },
        {
            label: 'Телефон',
            name: 'phone',
            type: 'text',
            placeholder: '+7 (909) 967 30 30'
        }
    ],
    nickname: 'Иван'
};

const pwd_change_context = {
    avatar: empty_avatar,
    fields: [
        {
            label: 'Старый пароль',
            name: 'oldPassword',
            type: 'password',
            placeholder: ''
        },
        {
            label: 'Новый пароль',
            name: 'newPassword',
            type: 'password',
            placeholder: ''
        },
        {
            label: 'Повторите новый пароль',
            name: 'newPasswordConfirmation',
            type: 'password',
            placeholder: ''
        }
    ],
    button: "Сохранить"
}

module.exports = {
    profile: function() {
        return template(profile_context);
    },
    change_pwd: function() {
        return template_change_pwd(pwd_change_context);
    }
}