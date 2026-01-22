# React + Vite

## После установки проекта на новый ПК вводим команду

```bash
npm install
```

## Запуск проекта

```bash
npm run dev
```

## Структура проекта

- модульная архитектура проекта

```bash
/src
|--pages            #Страницы. Страница регистрации/Домашняя страница/Страница товара/Панель администратора
|--modules          #Модули с бизнес-логикой
|--components       #Менее самостоятельные части кода(карточка товара). Может использоваться в разных модулях
|--ui               #Переиспользуемые компоненты(button/input/простые компоненты). Могут переиспользоваться в любом модуле, по любому пути/домену(/admin, /login, /home и т.д)
```

## Чего не должно быть в pages

- Собственные API-запросы
- Сложная бизнес-логика
- Состояние(кроме простого ui-состояния)

## Характеристики modules

- Имеет свою бизнес-логику
- Работает с API
- Имеет состояние
- Может содержать внутренние компоненты
- Решает одну конкретную задачу

## Характеристики components

- Переиспользуется в разных модулях/страницах
- Нет собственного API-запросов
- Нет сложной бизнес-логики
- Может иметь простое состояние(isOpen, isActive)
- Получает данные через props

## Как определить, куда помещать компонент

- Вопрос 1: Это точка входа роутера? Да->pages/Нет->идём дальше
- Вопрос 2: Имеет сложную бизнес-логику, API, состояние? Да->modules/Нет->идём дальше
- Вопрос 3: Это базовый ui-элемент? Да->ui/Нет->сomponents

## Пример pages

```bash
pages/
├── HomePage/ # Главная страница
│ ├── HomePage.jsx # Только сборка блоков
│ ├── HomeHero/ # Уникальный блок для главной
│ │ ├── HomeHero.jsx
│ │ └── HomeHero.module.css
│ └── index.js
│
├── ProductPage/ # Страница товара
│ ├── ProductPage.jsx # Собирает модули товара
│ └── index.js
│
├── AdminPage/ # Админ-панель
│ ├── AdminPage.jsx
│ ├── AdminSidebar/ # Уникальный сайдбар для админки
│ └── AdminHeader/ # Уникальный хедер для админки
│
└── AuthPage/ # Страница авторизации
├── AuthPage.jsx
└── AuthLayout/ # Уникальный лейаут для auth-страниц
```

## Пример modules

```bash
modules/
├── ProductDetailsModule/     # Детали товара
│   ├── components/           # Внутренние компоненты
│   │   ├── ProductGallery/   # Галерея изображений
│   │   ├── ProductPrice/     # Цена со скидками
│   │   └── ProductActions/   # Кнопки "Купить", "В избранное"
│   ├── api/
│   │   ├── productDetails.api.js    # Запрос деталей товара
│   │   └── addToCart.api.js         # Добавление в корзину
│   ├── hooks/
│   │   ├── useProductDetails.js     # Загрузка данных
│   │   └── useProductActions.js     # Логика действий
│   ├── store/               # Если используешь глобальное состояние
│   │   └── productDetails.slice.js
│   ├── utils/
│   │   └── formatProductData.js     # Форматирование данных товара
│   ├── ProductDetailsModule.jsx     # Главный компонент
│   └── index.js                     # Экспорт главного компонента
│
├── CartModule/              # Корзина покупок
│   ├── api/
│   │   └── cart.api.js              # Все запросы корзины
│   ├── hooks/
│   │   ├── useCart.js               # Управление корзиной
│   │   └── useCartTotals.js         # Расчет сумм
│   ├── CartModule.jsx
│   └── index.js
│
├── AuthModule/              # Авторизация
│   ├── components/
│   │   ├── LoginForm/               # Форма логина
│   │   ├── RegisterForm/            # Форма регистрации
│   │   └── ResetPasswordForm/       # Сброс пароля
│   ├── api/
│   │   ├── login.api.js
│   │   ├── register.api.js
│   │   └── logout.api.js
│   ├── hooks/
│   │   ├── useAuth.js               # Хук авторизации
│   │   └── useAuthValidation.js     # Валидация форм
│   ├── store/
│   │   └── auth.slice.js            # Токен, пользователь
│   ├── utils/
│   │   └── tokenManager.js          # Работа с токенами
│   └── index.js
│
├── CommentsModule/          # Комментарии
│   ├── api/
│   │   ├── fetchComments.api.js
│   │   └── addComment.api.js
│   ├── hooks/
│   │   └── useComments.js           # Пагинация, фильтрация
│   └── CommentsModule.jsx
│
└── SearchModule/            # Поиск
    ├── api/
    │   └── search.api.js            # Поисковые запросы
    ├── hooks/
    │   └── useSearch.js             # Дебаунс, кэширование
    ├── utils/
    │   └── searchAlgorithms.js      # Алгоритмы поиска
    └── SearchModule.jsx
```

## Пример components

```bash
components/
├── ProductCard/             # Карточка товара
│   ├── ProductCard.jsx
│   ├── ProductCard.module.css
│   └── index.js
│
├── UserCard/                # Карточка пользователя
│   ├── UserCard.jsx         # Показывает аватар, имя, статус
│   └── index.js
│
├── Breadcrumbs/             # Хлебные крошки
│   └── Breadcrumbs.jsx      # Просто рендерит список ссылок
│
├── RatingStars/             # Звезды рейтинга
│   └── RatingStars.jsx      # Только отображение рейтинга
│
├── ImageSlider/             # Слайдер изображений
│   ├── ImageSlider.jsx      # Управляет слайдами
│   └── ImageSlider.module.css
│
├── Accordion/               # Аккордеон
│   └── Accordion.jsx        # Только открытие/закрытие
│
├── Pagination/              # Пагинация
│   └── Pagination.jsx       # Рендерит кнопки страниц
│
└── Modal/                   # Модальное окно
    ├── Modal.jsx            # Открытие/закрытие, оверлей
    └── Modal.module.css
```

## Макет

Ссылка: https://www.figma.com/design/bSxMNm0CRXFcHQzke8C8W5/ROBO-SCHOOL?node-id=0-1&p=f&t=wlZixxp5JstKov5v-0
