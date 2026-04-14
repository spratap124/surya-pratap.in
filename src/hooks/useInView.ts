import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true)
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, visible }
}
