import {render_404} from './pages/404/404.js';
import {render_500} from './pages/500/500.js';
import {auth} from './pages/auth/auth.js';
import {register} from './pages/register/register.js';
import {profile, change_pwd} from './pages/profile/profile.js';
import {ui} from './pages/ui/ui.js';

const routes = {
    '404': render_404,
    '500': render_500,
    'auth': auth,
    'register': register,
    'profile': profile,
    'change_pwd': change_pwd,
    'ui': ui
}

function render(html) {
    const main = document.querySelector('#app');
    main.innerHTML = html;
}

window.goToPage = function(name) {
    render(routes[name]());
}

window.addEventListener('DOMContentLoaded', () => {
    render(routes['auth']());
})