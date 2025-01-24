"use client"

import { animatePageOut } from "app/animUtil/animation"
import Link from "next/link"
import { useParams, useRouter, usePathname } from "next/navigation"

import React from "react"

/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
const LocalizedClientLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}) => {
  const { countryCode } = useParams()
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    const newLink = `/${countryCode}${href}`
    if (`${pathname}/` !== newLink) {
      console.log(newLink, pathname)
      animatePageOut(newLink, router)
    }
  }

  return (
    <span onClick={handleClick} {...props}>
      {children}
    </span>
  )
}

export default LocalizedClientLink
