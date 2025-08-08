
'use client'
import React from 'react'
import Timer from './Timer'
type Task = {
  id: string; topic: string; subtopic: string;
  level: number; format: 'short'|'multi'|'open';
  stem: string; options?: string[]; answer: string[];
  time?: number; solution?: string[];
}
export default function TaskCard({ task, onResult }:{ task: Task; onResult:(ok:boolean)=>void }){
  const [value, setValue] = React.useState('')
  const [checked, setChecked] = React.useState<string|null>(null)
  const [done, setDone] = React.useState<boolean|null>(null)

  const submit = ()=>{
    let ok = false
    if(task.format==='short') ok = task.answer.map(a=>a.replace(',', '.')).includes(value.trim().replace(',', '.'))
    else if(task.format==='multi') ok = checked!==null && task.answer.includes(checked)
    else ok = value.trim().length>0 // open — в MVP просто принимаем и показываем разбор
    setDone(ok); onResult(ok)
  }
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs opacity-70">{task.topic} • {task.subtopic}</div>
        <Timer seconds={task.time ?? 90}/>
      </div>
      <div className="text-base font-medium">{task.stem}</div>
      {task.format==='short' && (
        <input className="mt-3" placeholder="Ответ" value={value} onChange={e=>setValue(e.target.value)} />
      )}
      {task.format==='multi' && (
        <div className="mt-3 space-y-2">
          {task.options?.map((o,i)=>(
            <label key={i} className="flex items-center gap-2 text-sm">
              <input type="radio" name={`opt-${task.id}`} onChange={()=>setChecked(o)} />
              <span>{o}</span>
            </label>
          ))}
        </div>
      )}
      {task.format==='open' && (
        <textarea className="mt-3" placeholder="Кратко набросай решение..."/>
      )}
      <div className="mt-3 flex gap-2">
        <button onClick={submit} className="btn">Проверить</button>
        {done!==null && <span className="badge">{done? 'Верно' : 'Ошибка'}</span>}
      </div>
      {done===false && task.solution && (
        <div className="mt-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm">
          <div className="font-semibold mb-1">Разбор:</div>
          <ol className="list-decimal pl-5 space-y-1">
            {task.solution.map((s,i)=>(<li key={i}>{s}</li>))}
          </ol>
        </div>
      )}
    </div>
  )
}
