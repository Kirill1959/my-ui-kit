# UI Kit

Набор переиспользуемых компонентов на React + TypeScript + CSS Modules.

## Стек

- React
- TypeScript
- Vite
- CSS Modules

## Запуск

```bash
npm install
npm run dev
```

После запуска открой адрес из терминала (по умолчанию `http://127.0.0.1:5173/`).

## Компоненты

- **Button**: варианты `primary` и `secondary`, размеры `sm`, `md`, `lg`
- **Input**: поле ввода с подписью (`label`) и сообщением об ошибке (`error`)

## Структура проекта

```
src/
  components/
    Button/
    Input/
  styles/
    tokens.css    # цвета, радиусы (CSS-переменные)
    global.css    # общие стили страницы
  App.tsx         # демо-страница со всеми компонентами
  main.tsx
```

## Как добавить новый компонент

1. Создать папку `src/components/ИмяКомпонента/`
2. Добавить `ИмяКомпонента.tsx`, `ИмяКомпонента.module.css` и `index.ts`
3. Показать компонент в `App.tsx`