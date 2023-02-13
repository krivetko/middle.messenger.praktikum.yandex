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
            label: 'email',
            name: 'Почта',
            type: 'text',
            plchldr: 'pochta@yandex.ru'
        },
        {
            label: 'login',
            name: 'Логин',
            type: 'text',
            plchldr: 'ivanivanov'
        },
        {
            label: 'first_name',
            name: 'Имя',
            type: 'text',
            plchldr: 'Иван'
        },
        {
            label: 'second_name',
            name: 'Фамилия',
            type: 'text',
            plchldr: 'Иванов'
        },
        {
            label: 'nickname',
            name: 'Имя в чате',
            type: 'text',
            plchldr: 'Иван'
        },
        {
            label: 'phone',
            name: 'Телефон',
            type: 'text',
            plchldr: '+7 (909) 967 30 30'
        }
    ],
    nickname: 'Иван'
};

const pwd_change_context = {
    avatar: empty_avatar,
    fields: [
        {
            label: 'oldPassword',
            name: 'Старый пароль',
            type: 'password',
            plchldr: ''
        },
        {
            label: 'newPassword',
            name: 'Новый пароль',
            type: 'password',
            plchldr: ''
        },
        {
            label: 'newPasswordConfirmation',
            name: 'Повторите новый пароль',
            type: 'password',
            plchldr: ''
        }
    ],
    button: "Сохранить"
}

module.exports = {
    profile: function() {
        const html = template(profile_context);
        return html;
    },
    change_pwd: function() {
        const html = template_change_pwd(pwd_change_context);
        return html;
    }
}