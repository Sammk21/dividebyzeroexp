import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
    console.log("page in trigered")
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")


  if (bannerOne) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo], {
      xPercent: 0,
    }).to(".whole-body",{
      opacity:0,
      duration:1,
    })
    .to(bannerTwo, {
      xPercent: 100,
      duration:1.5,
      ease:"power4.inOut"
    },"-=0.5").to(bannerOne, {
      xPercent: 100,
       duration:1.5,
      ease:"power4.inOut",
    },.2)
    .to(".whole-body",{
      opacity:1,
      duration:1,
    },"-=0.5")
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {

  console.log("page out trigered")
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")


  if (bannerOne ) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo], {
      xPercent: -100,
    
    }).to(bannerOne, {
      xPercent: 0,
       duration:1.5,
          ease:"power4.inOut",
      onComplete: () => {
        router.push(href)
      },
    }).to(bannerTwo, {
      xPercent: 0,
       duration:1.5,
          ease:"power4.inOut",
      onComplete: () => {
        router.push(href)
      },
    },.2)
  }}
