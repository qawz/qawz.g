import { ArrowRight, Code2, BookOpen, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { courses, totalLessons } from '@/data/courses'

export default function Hero({ doneCount }: { doneCount: number }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-32 hidden font-mono text-xs text-slate-600 lg:block">
        <pre>{`def learn(topic):
    while not mastered(topic):
        practice()
    return "🎉 掌握了！"`}</pre>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-sm text-slate-300">
          <Code2 className="h-4 w-4 text-emerald-400" />
          从零基础到实战，一站式 Python 学习平台
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          学 Python，
          <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
            从这里开始
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
          {courses.length} 门精品课程 · {totalLessons} 节互动教程 · 全部配有可运行的代码示例，
          循序渐进，每周都有看得见的进步。
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="bg-emerald-500 text-slate-950 hover:bg-emerald-400" asChild>
            <a href="#courses">
              开始学习 <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
            <a href="#path">查看学习路径</a>
          </Button>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <BookOpen className="mx-auto mb-2 h-6 w-6 text-sky-400" />
            <div className="text-2xl font-bold">{totalLessons}</div>
            <div className="text-sm text-slate-400">节精选课程</div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <Code2 className="mx-auto mb-2 h-6 w-6 text-emerald-400" />
            <div className="text-2xl font-bold">{totalLessons}+</div>
            <div className="text-sm text-slate-400">段代码示例</div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <Trophy className="mx-auto mb-2 h-6 w-6 text-amber-400" />
            <div className="text-2xl font-bold">{doneCount}</div>
            <div className="text-sm text-slate-400">你已完成的课时</div>
          </div>
        </div>
      </div>
    </section>
  )
}
