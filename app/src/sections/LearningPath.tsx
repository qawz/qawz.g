import { learningPath } from '@/data/courses'
import { Badge } from '@/components/ui/badge'

export default function LearningPath() {
  return (
    <section id="path" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">10 周学习路径</h2>
        <p className="mt-3 text-center text-slate-500">按阶段循序渐进，拒绝东一榔头西一棒子</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {learningPath.map((step, i) => (
            <div
              key={step.stage}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-lg"
            >
              <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                {i + 1}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-emerald-600">
                {step.stage} · {step.weeks}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {step.skills.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
