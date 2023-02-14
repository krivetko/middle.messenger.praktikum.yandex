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
            label: 'Почта',
            name: 'email',
            type: 'text'
        },
        {
            label: 'Логин',
            name: 'login',
            type: 'text'
        },
        {
            label: 'Имя',
            name: 'first_name',
            type: 'text'
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            type: 'text'
        },
        {
            label: 'Телефон',
            name: 'phone',
            type: 'text'
        },
        { 
            label: 'Пароль',
            name: 'password',
            type: 'password'
        },
        { 
            label: 'Пароль (ещё раз)',
            name: 'confirm_password',
            type: 'password'
        }
    ],
    button: "Зарегистрироваться"
};

module.exports = {
    register: function() {
        return template(register_context);
    }
}