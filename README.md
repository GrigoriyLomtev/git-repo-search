# Git repo search

https://git-repo-search-jade.vercel.app/
## About project | О проекте

Проект "Git-repo-search" - это одностраничное веб-приложение, разработанное с использованием ReactJs, Redux-ToolKit, Bootstrap и React-router-dom. Он позволяет искать проекты на GitHub и отображать результаты поиска в виде карточек. Пользователь может просматривать информацию о проекте, переходить на репозиторий GitHub и профиль автора проекта.

The "Git-repo-search" project is a single page web application developed with ReactJs, Redux-ToolKit, Bootstrap and React-router-dom. It allows you to search for projects on GitHub and display the search results as cards. The user can view information about the project, go to the GitHub repository and the profile of the project author.

- React
- Redux Toolkit
- TypeScript
- Bootstrap

## Features | Описание функциональности

- Пользователь вводит текст в поле поиска и нажимает кнопку "Поиск".
- Приложение отправляет запрос на GitHub API для поиска репозиториев, используя введенный текст.
- Результаты поиска выводятся на страницу в виде карточек проектов.
- Каждая карточка проекта отображает имя проекта, автора, количество звезд и количество просмотров.
- Пользователь может нажать на имя проекта, чтобы перейти на страницу репозитория GitHub.
- Пользователь может нажать на имя автора, чтобы перейти на страницу профиля автора на GitHub.
- При перезагрузке страницы восстанавливается поисковой запрос, карточки проектов и активная страница в пагинаторе.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
