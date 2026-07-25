import { useState, useCallback } from 'react'

const KEY = 'python-learn-progress'

function load(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

export function useProgress() {
  const [done, setDone] = useState<string[]>(load)

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }, [])

  return { done, toggle }
}
