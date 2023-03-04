import Block from '../../utils/Block';
import { ChatsHeader } from '../chats_header/chats_header';
import { Contact, contactProps } from '../../components/contact/contact';
import template from './sidepanel.hbs';

const chatsList = [
  {
    avatar_letter: 'А',
    nickname: 'Андрей',
    lastmsg: 'Изображение',
    time: '10:49',
    new_msgs: 2,
  },
  {
    avatar_letter: 'К',
    nickname: 'Киноклуб',
    lastmsg: 'Вы: стикер',
    time: '12:00',
  },
  {
    avatar_letter: 'И',
    nickname: 'Илья',
    lastmsg: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '15:12',
    new_msgs: 4,
  },
  {
    avatar_letter: 'В',
    nickname: 'Вадим',
    lastmsg: 'Вы: Круто!',
    time: 'Пт',
    active: true,
  },
  {
    avatar_letter: 'Т',
    nickname: 'тет-а-теты',
    lastmsg: 'И Human Interface Guidelines и Material Design рекомендуют...',
    time: 'Ср',
  },
  {
    avatar_letter: '1',
    nickname: '1, 2, 3',
    lastmsg: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    time: 'Пн',
  },
];

export class SidePanel extends Block {
  constructor() {
    super();
  }

  init() {
       this.element!.classList.add('ui__contact_list');
       this.children.contacts_header = new ChatsHeader();
       const chats: any = [];
       chatsList.forEach((element: contactProps) => chats.push(new Contact(element)));
       this.children.chats = chats;
  }

  protected render() {
    return this.compile(template, {});
  }
}
