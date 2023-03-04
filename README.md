Учебный проект по разработке веб-приложения обмена мгновенными сообщениями (мессенджера)
За основу взят дизайн команды Яндекс.Практикума: https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=1%3A2&t=xcdnXzdGR0bmnG1m-0
Код переписан на TypeScript и разбит на компоненты. Для реактивности реализован класс EventBus.
Дополнительно добавлены классы для работы с HTTP-запросами и валидации полей ввода на формах.

Для билда использовать команду:
parcel build ./static/index.html --no-cache

Для тестирования использовать команду:
npm run start
Проект запускается по адресу http://localhost:3000/

Домен на Netlify:
https://phenomenal-kangaroo-6d47cc.netlify.app/

В проект добавлены ESLint с конфигом airbnb, Stylelint
