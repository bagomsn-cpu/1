
# ExamQuest – ЕГЭ Математика (Web, PWA)

Мобильный сайт на Next.js 14 + Tailwind. Геймифицированная подготовка к ЕГЭ.

## Быстрый деплой на Vercel (рекомендуется)
1. Создайте пустой репозиторий на GitHub.
2. Скопируйте файлы проекта в репозиторий и сделайте первый commit/push.
3. Перейдите на https://vercel.com/import и выберите ваш репозиторий.
4. Framework Preset: **Next.js**. Остальное по умолчанию.
5. Нажмите **Deploy**. Через 1–2 минуты получите онлайн-URL вида `https://examquest-...vercel.app`.

### Альтернатива: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
# На вопросах отвечайте по умолчанию (Framework: Next.js)
```

## Локальный запуск
```bash
npm install
npm run dev
# http://localhost:3000
```

## Структура
- `app/` — страницы и глобальные стили
- `components/` — компоненты (TaskCard, Timer и т.д.)
- `lib/` — мок-данные задач
- `public/` — статика
