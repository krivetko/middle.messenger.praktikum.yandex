import template from "./ui.hbs";

import contact_list from "../../components/contact_list/contact_list.hbs";
import conversation from "../../components/conversation/conversation.hbs";
import Handlebars from "handlebars/dist/handlebars.runtime";
Handlebars.registerPartial('conversation', conversation);
Handlebars.registerPartial('contact_list', contact_list);

import attach from '../../../static/icons/attach.png';
import right_arrow from '../../../static/icons/right_arrow.png';
import double_check from '../../../static/icons/double_check.png';
import hasselblad from '../../../static/img/hasselblad.png';

const ui_context = {
    messages: [
        {
        class: 'message-in',
        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.'
        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        `,
        time: '11:56'
        },
        {
            class: 'message-in',
            img: hasselblad,
            time: '12:00'
            },
        {
            class: 'message-out',
            text: 'Круто!',
            time: '12:00',
            double_check: double_check
            },
    ],
    attach: attach,
    right_arrow: right_arrow,
    contacts: [
        {
            avatar_letter: 'А',
            nickname: 'Андрей',
            lastmsg: 'Изображение',
            time: '10:49',
            new_msgs: 2
        },
        {
            avatar_letter: 'К',
            nickname: 'Киноклуб',
            lastmsg: 'Вы: стикер',
            time: '12:00'
        },
        {
            avatar_letter: 'И',
            nickname: 'Илья',
            lastmsg: 'Друзья, у меня для вас особенный выпуск новостей!...',
            time: '15:12',
            new_msgs: 4
        },
        {
            avatar_letter: 'В',
            nickname: 'Вадим',
            lastmsg: 'Вы: Круто!',
            time: 'Пт',
            active: true
        },
        {
            avatar_letter: 'Т',
            nickname: 'тет-а-теты',
            lastmsg: 'И Human Interface Guidelines и Material Design рекомендуют...',
            time: 'Ср'
        },
        {
            avatar_letter: '1',
            nickname: '1, 2, 3',
            lastmsg: 'Миллионы россиян ежедневно проводят десятки часов свое...',
            time: 'Пн'
        },
    ]
};

module.exports = {
    ui: function() {
        const html = template(ui_context);
        return html;
    }
}