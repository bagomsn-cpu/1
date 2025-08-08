
'use client'
import TaskCard from "@/components/TaskCard"
import ResultPanel from "@/components/ResultPanel"
import SRSReview from "@/components/SRSReview"
import { mockTasks } from "@/lib/mockTasks"
import React from "react"

export default function PlayPage(){
  const [i, setI] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const t = mockTasks[i]
  const onResult = (ok:boolean)=>{
    if(ok) setCorrect(c=>c+1)
    setTimeout(()=> setI(j=> Math.min(j+1, mockTasks.length-1)), 400)
  }
  return (
    <section className="space-y-4">
      <div className="card flex items-center justify-between">
        <div>
          <div className="text-xs opacity-70">Миссия дня</div>
          <div className="text-lg font-bold">Спид-ран: 2 задачи</div>
        </div>
        <a href="/raid" className="btn btn-secondary">К рейду</a>
      </div>
      <TaskCard task={t} onResult={onResult}/>
      <ResultPanel correct={correct} total={i+1}/>
      <SRSReview/>
    </section>
  )
}
