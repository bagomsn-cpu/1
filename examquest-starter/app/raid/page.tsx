
import Timer from "@/components/Timer"

export default function Raid(){
  return (
    <section className="space-y-4">
      <div className="card flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Рейд-недели</h1>
          <p className="text-sm opacity-80">Полноценный пробник под таймер.</p>
        </div>
        <Timer seconds={60*30}/>
      </div>
      <div className="card">
        <p className="text-sm">Здесь будет интерфейс бланка ответов и сборка задач из банка.</p>
      </div>
    </section>
  )
}
