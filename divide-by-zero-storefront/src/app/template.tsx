"use client"

import { usePathname } from "next/navigation"
import { animatePageIn } from "./animUtil/animation"
import { useEffect } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    animatePageIn()
  }, [pathname])

  return (
    <div className="w-screen h-screen justify-center items-center">
      <div
        id="banner-1"
        className="min-h-screen bg-[#747264]  z-[998] fixed top-0 left-0 w-[100vw]"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-[#3C3633] z-[998] fixed top-0 left-0
        w-[100vw]"
      ></div>

      {children}
    </div>
  )
}
