
export default function Profile(){
  return (
    <section className="grid gap-4">
      <div className="card">
        <div className="text-xs opacity-70">Цель</div>
        <div className="text-2xl font-bold">100 баллов</div>
        <div className="text-sm opacity-70 mt-1">Прогноз балла появится после первых 50 задач.</div>
      </div>
      <div className="card">
        <div className="font-semibold">Перки</div>
        <ul className="list-disc pl-5 text-sm mt-2">
          <li>Холодная голова — +5% очков за прохождение без подсказок</li>
          <li>Геометр — 1 бесплатная подсказка-чертёж в миссии</li>
        </ul>
      </div>
    </section>
  )
}
