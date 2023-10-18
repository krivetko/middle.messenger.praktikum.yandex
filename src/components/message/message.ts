import Block from '../../utils/Block';
import template from './message.hbs';

interface messageProps {
    img?: any,
    text?: string,
    double_check?: any,
    time: string,
    class: string
}

export class Message extends Block<messageProps> {
  constructor(props: messageProps) {
    super(props);
  }

  init() {
        this.element!.classList.add('message');
        if (this.props.class) {
            this.element!.classList.add(this.props.class);
        }
  }

  protected render() {
    return this.compile(template, this.props);
  }
}
