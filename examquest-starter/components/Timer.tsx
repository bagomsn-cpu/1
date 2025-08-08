
'use client'
import React from 'react'
export default function Timer({ seconds, onEnd }:{seconds:number; onEnd?:()=>void}){
  const [t, setT] = React.useState(seconds)
  React.useEffect(()=>{
    if(t<=0){ onEnd?.(); return }
    const id = setTimeout(()=>setT(t-1),1000)
    return ()=>clearTimeout(id)
  },[t])
  const mm = Math.floor(t/60).toString().padStart(2,'0')
  const ss = (t%60).toString().padStart(2,'0')
  return <span className="badge">{mm}:{ss}</span>
}
