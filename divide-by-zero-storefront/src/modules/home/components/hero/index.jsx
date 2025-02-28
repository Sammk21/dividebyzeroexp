"use client"
import Image from "next/image"
import { BsArrowDown } from "react-icons/bs"
import { useInView, motion } from "framer-motion"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Button } from "@medusajs/ui"

const Hero = () => {
  const container = useRef(null)
  const introImage = useRef(null)
  const introVideo = useRef(null)
  const paraText = useRef(null)
  const logoText = useRef(null)

  //gsap setup for scrolltrigger hero eements
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Check if window width is greater than or equal to 800px
    if (window.innerWidth >= 800) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: "top",
          end: "+=800px",
        },
      })

      timeline
        .from(container.current, { scale: 1 })
        .to(introImage.current, { scale: 1.05, rotate: -11, opacity: 0.3 }, 0)
        .to(introVideo.current, { scale: 1.05, rotate: 11, opacity: 0.3 }, 0)
        .to(paraText.current, { opacity: 0, translateY: 150 }, 0)
    }
    return
  }, [])

  //Framer motion setup for text and icons animations
  const isLogoInView = useInView(logoText, { once: true })
  const textAnimation = {
    initial: { y: "110%", scale: "1.3" },
    enter: (i) => ({
      y: "0",
      scale: "1",
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.03 * i,
      },
    }),
  }

  //written content
  const text = "Dividebyzero"
  const para = "Confused what to wear? dont worry we got you covered"

  return (
    <>
      <div ref={container} className="textglobal relative ">
        <div className="  h-full w-full relative text-white pb-12  ">
          <div className=" w-full h-full sm:gap-6 flex flex-col ">
            <div className=" relative aspect-video h-[calc(100dvh)]  ">
              <Image
                src="https://only-education-strapi-media.s3.ap-south-1.amazonaws.com/e0f4d914204d2e3800b96e9c6a20c8bd_a809f70198.jpg"
                alt=""
                fill
                className="object-cover object-center  intro-img"
              />
            </div>

            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
              <p>Latest Collection</p>
              <h1 className="font-bold mb-4 font-serif text-[8vw] humane tracking-normal drop-shadow-lg">
                The lazy capsule
              </h1>
              <Button size={"large"}>Shop now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
