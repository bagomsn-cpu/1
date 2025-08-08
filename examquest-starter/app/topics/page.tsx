
export default function Topics(){
  const topics = [
    {name:'Алгебра', progress: 42},
    {name:'Тригонометрия', progress: 28},
    {name:'Геометрия', progress: 12},
    {name:'Вероятность', progress: 8},
  ]
  return (
    <section className="grid gap-3">
      {topics.map(t=> (
        <div key={t.name} className="card">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{t.name}</div>
            <div className="badge">{t.progress}%</div>
          </div>
          <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div className="h-2 bg-black dark:bg-white rounded-full" style={{width:`${t.progress}%`}}/>
          </div>
        </div>
      ))}
    </section>
  )
}
