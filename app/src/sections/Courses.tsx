import { useState } from 'react'
import { CheckCircle2, Circle, Clock, ChevronDown, Copy, Check } from 'lucide-react'
import { courses, type Lesson } from '@/data/courses'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="relative mt-3 overflow-hidden rounded-xl bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? '已复制' : '复制代码'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-200">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}

function LessonItem({
  lesson,
  done,
  onToggle,
}: {
  lesson: Lesson
  done: boolean
  onToggle: (id: string) => void
}) {
  return (
    <AccordionItem value={lesson.id} className="border-b border-slate-100 last:border-0">
      <AccordionTrigger className="group px-4 py-3 hover:no-underline">
        <div className="flex flex-1 items-center gap-3 text-left">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggle(lesson.id)
            }}
            className="shrink-0"
            aria-label="标记完成"
          >
            {done ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            ) : (
              <Circle className="h-5 w-5 text-slate-300 transition-colors group-hover:text-slate-400" />
            )}
          </button>
          <span className={`font-medium ${done ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
            {lesson.title}
          </span>
          <span className="ml-auto flex items-center gap-1 text-xs text-slate-400">
            <Clock className="h-3.5 w-3.5" /> {lesson.duration}
            <ChevronDown className="ml-2 h-4 w-4" />
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-5">
        <p className="text-sm leading-relaxed text-slate-600">{lesson.content}</p>
        <CodeBlock code={lesson.code} />
        <Button
          size="sm"
          variant={done ? 'outline' : 'default'}
          className={done ? 'mt-4' : 'mt-4 bg-emerald-500 hover:bg-emerald-600'}
          onClick={() => onToggle(lesson.id)}
        >
          {done ? '标记为未完成' : '我学完了这一节 ✓'}
        </Button>
      </AccordionContent>
    </AccordionItem>
  )
}

export default function Courses({
  done,
  onToggle,
}: {
  done: string[]
  onToggle: (id: string) => void
}) {
  return (
    <section id="courses" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">课程体系</h2>
        <p className="mt-3 text-center text-slate-500">
          点击课时展开讲解与代码示例，学完点 ✓ 记录进度（保存在你的浏览器中）
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {courses.map((course) => {
            const doneInCourse = course.lessons.filter((l) => done.includes(l.id)).length
            const pct = Math.round((doneInCourse / course.lessons.length) * 100)
            return (
              <div
                key={course.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <Badge className="bg-white/20 text-white hover:bg-white/20">{course.level}</Badge>
                  </div>
                  <p className="mt-1.5 text-sm text-white/85">{course.subtitle}</p>
                  <div className="mt-4">
                    <div className="mb-1.5 flex justify-between text-xs text-white/80">
                      <span>
                        已完成 {doneInCourse} / {course.lessons.length} 节
                      </span>
                      <span>{pct}%</span>
                    </div>
                    <Progress value={pct} className="h-2 bg-white/25 [&>div]:bg-white" />
                  </div>
                </div>
                <Accordion type="single" collapsible className="px-2 py-1">
                  {course.lessons.map((lesson) => (
                    <LessonItem
                      key={lesson.id}
                      lesson={lesson}
                      done={done.includes(lesson.id)}
                      onToggle={onToggle}
                    />
                  ))}
                </Accordion>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
