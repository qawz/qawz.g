import { ExternalLink } from 'lucide-react'
import { resources } from '@/data/courses'

export default function Resources() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">延伸学习资源</h2>
        <p className="mt-3 text-center text-slate-500">课上学方法，课下用这些网站持续精进</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600">{r.name}</h3>
                <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-emerald-500" />
              </div>
              <p className="mt-2 text-sm text-slate-500">{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
