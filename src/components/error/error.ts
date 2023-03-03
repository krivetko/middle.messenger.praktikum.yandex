import Block from '../../utils/Block';
import template from "./error.hbs";

export interface ErrorProps {
    code: number,
    description: string
}

export class Error extends Block {
    constructor(props: ErrorProps) {
        super('div', props)
    }

    init() {
       this.element!.classList.add('error'); 
    }

    protected render() {
        return this.compile(template, this.props);
    }
}