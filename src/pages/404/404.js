import template from "./404.hbs";

module.exports = {
    render_404: function() {
        const html = template();
        return html;
    }
}