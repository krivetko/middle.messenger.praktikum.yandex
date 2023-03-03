import Block from '../../utils/Block'
import template from "./chats_header.hbs";

export class ChatsHeader extends Block {
    constructor() {
        super()
    }

    init() {
       this.element!.classList.add('ui__contact_list__header'); 
    }

    protected render() {
        return this.compile(template, {});
    }
}