import { MainPage } from './pages/main/main';
import { Page4xx } from './pages/404/404';
import { Page5xx } from './pages/500/500';
import { AuthPage } from './pages/auth/auth';
import { RegisterPage } from './pages/register/register';
import { ProfilePage } from './pages/profile/profile';
import { PasswordChangePage } from './pages/change_pwd/change_pwd';

const routes: Record<string, any> = {
  404: Page4xx,
  500: Page5xx,
  auth: AuthPage,
  register: RegisterPage,
  profile: ProfilePage,
  change_pwd: PasswordChangePage,
  ui: MainPage,
};

function render(className: any) {
  const main = document.querySelector('#app');
  const page = new className();
    main!.innerHTML = '';
    main!.append(page.getContent()!);
    page.dispatchComponentDidMount();
}

declare global {
    interface Window {
        goToPage: (name: string) => void;
    }
}

window.goToPage = function (name: string) {
  render(routes[name]);
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');
  const page = new MainPage();
    root!.append(page.getContent()!);
    page.dispatchComponentDidMount();
});
