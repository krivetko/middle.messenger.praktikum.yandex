import Block from '../../utils/Block';
import { ContactHeader } from '../contact_header/contact_header';
import { Message } from '../message/message';
import { Input } from '../input/input';
import template from './rightpanel.hbs';
import double_check from '../../../static/icons/double_check.png';
import hasselblad from '../../../static/img/hasselblad.png';
import attach from '../../../static/icons/attach.png';
import right_arrow from '../../../static/icons/right_arrow.png';

const messagesList = [
  {
    class: 'message-in',
    text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.'
    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    `,
    time: '11:56',
  },
  {
    class: 'message-in',
    img: hasselblad,
    time: '12:00',
  },
  {
    class: 'message-out',
    text: 'Круто!',
    time: '12:00',
    double_check,
  },
];

export class RightPanel extends Block {
  constructor() {
    super();
  }

  init() {
        this.element!.classList.add('ui__conversation');
        this.children.contact_header = new ContactHeader();
        const messages: any = [];
        messagesList.forEach((element) => messages.push(new Message(element)));
        this.children.messages = messages;
        this.children.message_input = new Input({
          class: 'ui__conversation',
          type: 'text',
          name: 'message',
          placeholder: 'Сообщение',
          label: 'message',
          label_hidden: true,
          error_text: 'Сообщение должно быть не пустым',
          form_class: 'ui__conversation__message',
        });
  }

  protected render() {
    return this.compile(template, { right_arrow, attach });
  }
}
