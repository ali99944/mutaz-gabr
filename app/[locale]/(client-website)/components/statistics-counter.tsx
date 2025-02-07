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
        scale: [1, 1.0, 1],
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
    <motion.div ref={ref} animate={controls} className="text-center bg-white p-4 shadow-sm rounded-lg">
      <motion.span className="text-3xl font-bold text-primary">{count}</motion.span>
      <h3 className="text-lg mt-2 text-primary">{title}</h3>
    </motion.div>
  )
}

