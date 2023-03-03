import Block from '../../utils/Block'
import template from "./contact.hbs";

export interface contactProps {
    avatar_letter: string,
    nickname: string,
    lastmsg: string,
    time: string,
    new_msgs?: number,
    active?: boolean,
    hovered?: boolean,
    events?: Record<string, () => void>
}

export class Contact extends Block {

    constructor(props: contactProps) {
        super('div', {...props, events: {
            mouseover: () => this._hoverOn(),
            mouseleave: () => this._hoverOff()
        }});
    }

    init() {
        this.element!.classList.add('contact_list__element');
        if (this.props.active) {
            this.element!.classList.add('active');
        }
    }

    protected render() {
        return this.compile(template, this.props);
    }

    private _hoverOn() {
        this.element!.classList.add('chat_hovered');
        this.setProps({hovered: true});
    }

    private _hoverOff() {
        this.element!.classList.remove('chat_hovered');
        this.setProps({hovered: false});
    }
}