import Block from '../../utils/Block';
import {Error, ErrorProps} from '../../components/error/error';
import template from "./404.hbs";

const error404: ErrorProps = {
    code: 404,
    description: 'Не туда попали'
}

export class Page4xx extends Block {
    constructor() {
        super()
    }

    init() {
       this.element!.classList.add('error_container'); 
       this.children.Error = new Error(error404);
    }

    protected render() {
        return this.compile(template, this.props);
    }
}