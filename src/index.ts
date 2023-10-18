import { MainPage } from './pages/main/main';
//import { Page4xx } from './pages/404/404';
//import { Page5xx } from './pages/500/500';
import { AuthPage } from './pages/auth/auth';
import { RegisterPage } from './pages/register/register';
import { ProfilePage } from './pages/profile/profile';
//import { PasswordChangePage } from './pages/change_pwd/change_pwd';
import Router from './utils/Router';

enum Routes {
  Index = '/',
  Register = '/register',
  Profile = '/profile',
  Messenger = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, AuthPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, MainPage)

  //let isProtectedRoute = true;

  // switch (window.location.pathname) {
  //   case Routes.Index:
  //   case Routes.Register:
  //     //isProtectedRoute = false;
  //     break;
  // }

  try {
  //   await AuthController.fetchUser();

     Router.start();

  //   if (!isProtectedRoute) {
       Router.go(Routes.Index)
  //   }
  } catch (e) {
     Router.start();

  //   if (isProtectedRoute) {
       Router.go(Routes.Index);
  //   }
  }
});
