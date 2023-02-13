import template from "./500.hbs";

module.exports = {
    render_500: function() {
        const html = template();
        return html;
    }
}