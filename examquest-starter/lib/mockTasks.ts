
export const mockTasks = [
  {
    id: "TRIG-001",
    topic: "Тригонометрия",
    subtopic: "Уравнения",
    level: 2,
    format: "short",
    stem: "Решите уравнение sin x = 1/2, x ∈ [0; 2π).",
    answer: ["π/6","5π/6"],
    time: 60,
    solution: ["sin x = 1/2 на [0;2π) при x=π/6 и x=5π/6."]
  },
  {
    id: "DER-001",
    topic: "Производная",
    subtopic: "Экстремумы",
    level: 3,
    format: "short",
    stem: "Найдите производную f(x)=x^3-3x^2+1 в точке x=2.",
    answer: ["f'(2)= (3x^2-6x)|_{x=2}=12-12=0","0"],
    time: 60,
    solution: ["f'(x)=3x^2-6x.","Подставляем x=2: 12-12=0."]
  }
]
