
export default function Page() {
  return (
    <section className="space-y-6">
      <div className="card">
        <h1 className="text-2xl font-bold">ЕГЭ по математике как игра</h1>
        <p className="mt-2 text-sm opacity-80">Миссии на 3–5 минут, мини-боссы, еженедельный рейд и умный разбор ошибок. Мобильная версия — в приоритете.</p>
        <div className="mt-4 flex gap-2">
          <a href="/play" className="btn">Начать</a>
          <a href="/raid" className="btn btn-secondary">Рейд-недели</a>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold">Квесты дня</h2>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li>2 спид-рана по производной</li>
            <li>Мини-босс «тригонометрия»</li>
            <li>Повтори 25 карточек</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="font-semibold">Цель: 100 баллов</h2>
          <p className="text-sm opacity-80 mt-2">Личный прогресс и прогноз балла на основе точности и времени.</p>
        </div>
      </div>
    </section>
  );
}
