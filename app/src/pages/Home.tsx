import { Code2 } from 'lucide-react'
import Hero from '@/sections/Hero'
import LearningPath from '@/sections/LearningPath'
import Courses from '@/sections/Courses'
import Resources from '@/sections/Resources'
import { useProgress } from '@/hooks/use-progress'
import { totalLessons } from '@/data/courses'

export default function Home() {
  const { done, toggle } = useProgress()

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* 顶部导航 */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 font-bold text-white">
            <Code2 className="h-5 w-5 text-emerald-400" />
            Python 学院
          </a>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#path" className="transition-colors hover:text-white">学习路径</a>
            <a href="#courses" className="transition-colors hover:text-white">课程</a>
            <span className="hidden rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-400 sm:block">
              进度 {done.length}/{totalLessons}
            </span>
          </nav>
        </div>
      </header>

      <Hero doneCount={done.length} />
      <LearningPath />
      <Courses done={done} onToggle={toggle} />
      <Resources />

      <footer className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          <div className="mb-2 flex items-center justify-center gap-2 font-semibold text-slate-600">
            <Code2 className="h-4 w-4 text-emerald-500" /> Python 学院
          </div>
          每天进步一点点，十周后你会感谢现在开始学习的自己。学习进度保存在你的浏览器本地。
        </div>
      </footer>
    </div>
  )
}
