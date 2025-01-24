"use client"

import { useEffect, useState } from "react"

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 45,
    seconds: 37,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const seconds = prev.seconds - 1
        const minutes = seconds < 0 ? prev.minutes - 1 : prev.minutes
        const hours = minutes < 0 ? prev.hours - 1 : prev.hours

        return {
          hours: hours < 0 ? 0 : hours,
          minutes: minutes < 0 ? 59 : minutes,
          seconds: seconds < 0 ? 59 : seconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-[#d9c6b2] text-[#8b0000] font-semibold py-2 px-4 text-center text-sm">
      Get 25% Off This Summer Sale. Grab It Fast!!{" "}
      {`${timeLeft.hours}H : ${timeLeft.minutes}M : ${timeLeft.seconds}S`}
    </div>
  )
}
