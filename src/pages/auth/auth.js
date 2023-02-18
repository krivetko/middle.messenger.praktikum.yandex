import template from "./auth.hbs";
import Handlebars from "handlebars/dist/handlebars.runtime";
import form from "../../components/form/form.hbs";
import button from "../../components/button/button.hbs";
Handlebars.registerPartial('form', form);
Handlebars.registerPartial('button', button);


const auth_context = {
    form_class: "form__auth", 
    fields: [
    {
        label: 'Логин',
        name: 'login',
        type: 'text'
    },
    { 
        label: 'Пароль',
        name: 'password',
        type: 'password'
    }
    ],
    button: "Авторизоваться"
};

module.exports = {
    auth: function() {
        return template(auth_context);
    }
}