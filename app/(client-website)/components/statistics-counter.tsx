"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface StatisticCounterProps {
  end: number
  title: string
}

export default function StatisticCounter({ end, title }: StatisticCounterProps) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 },
      })
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end, controls])

  return (
    <motion.div ref={ref} animate={controls} className="text-center">
      <motion.span className="text-4xl font-bold text-[#9c8a5a]">{count}</motion.span>
      <h3 className="text-xl mt-2">{title}</h3>
    </motion.div>
  )
}

