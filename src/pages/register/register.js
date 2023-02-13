import template from "./register.hbs";

import Handlebars from "handlebars/dist/handlebars.runtime";
import form from "../../components/form/form.hbs";
import button from "../../components/button/button.hbs";
Handlebars.registerPartial('form', form);
Handlebars.registerPartial('button', button);

const register_context = {
    form_class: "form__register", 
    fields: [
        {
            label: 'email',
            name: 'Почта',
            type: 'text'
        },
        {
            label: 'login',
            name: 'Логин',
            type: 'text'
        },
        {
            label: 'first_name',
            name: 'Имя',
            type: 'text'
        },
        {
            label: 'second_name',
            name: 'Фамилия',
            type: 'text'
        },
        {
            label: 'phone',
            name: 'Телефон',
            type: 'text'
        },
        { 
            label: 'password',
            name: 'Пароль',
            type: 'password'
        },
        { 
            label: 'confirm_password',
            name: 'Пароль (ещё раз)',
            type: 'password'
        }
    ],
    button: "Зарегистрироваться"
};

module.exports = {
    register: function() {
        const html = template(register_context);
        return html;
    }
}