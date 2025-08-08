
export default function ResultPanel({ correct, total }:{correct:number; total:number}){
  const pct = Math.round(correct/Math.max(total,1)*100)
  return (
    <div className="card mt-4">
      <div className="text-sm opacity-70">Результат</div>
      <div className="text-2xl font-bold">{correct}/{total} · {pct}%</div>
      <div className="text-xs opacity-70 mt-1">Время и точность влияют на прогноз балла.</div>
    </div>
  )
}
