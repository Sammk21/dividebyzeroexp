import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Logo from "@modules/logo"
import { ChevronLeft, ChevronRight, Search, ShoppingBag } from "lucide-react"

import { BsPerson } from "react-icons/bs"
import Link from "next/link"
import { AnnouncementBar } from "components/announcement-bar"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-[100dvw] h-16  z-10">
        <div className="grid grid-cols-3 px-3 mt-4 relative ">
          <nav className=" gap-8">
            <ul className="sc-d79fef73-5 gSjwgs flex justify-center gap-x-1.5">
              <li className="sc-d79fef73-9 buhRBc  ">
                <div className="sc-d79fef73-4  bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <span className="sc-d79fef73-7">Shop</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0 goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6  iaKWpD">
                    <span className="sc-d79fef73-7">Collections</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0  goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <span className="sc-d79fef73-7">Explore</span>
                  </button>
                </div>
              </li>
            </ul>
          </nav>
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative h-28 w-28 -m-8">
              <Link href="/">
                <Image
                  alt="divide by zero logo"
                  src="https://only-education-strapi-media.s3.ap-south-1.amazonaws.com/TEXT_LOGO_white_a6ca930a0e.png"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
          <nav className="flex  ">
            <ul className="sc-d79fef73-5 gSjwgs flex gap-x-1.5 justify-end">
              <li className="sc-d79fef73-9 buhRBc  ">
                <div className="sc-d79fef73-4  bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <Search className="w-3 h-3" />
                    <span className="sc-d79fef73-7">Search</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0 goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6  iaKWpD">
                    <span className="sc-d79fef73-7">Login</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0  goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <span className="sc-d79fef73-7">
                      <ShoppingBag className="w-3 h-3" />
                    </span>
                    0
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

// ;<header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-10">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="grid grid-cols-3 items-center h-16">
//       {/* Mobile menu button */}
//       <button
//         className="lg:hidden p-2"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? (
//           <X className="w-6 h-6" />
//         ) : (
//           <Menu className="w-6 h-6" />
//         )}
//       </button>

//       {/* Left Navigation - Desktop */}
//       <nav className="hidden lg:block">
//         <ul className="flex items-center gap-x-1.5">
//           {navItems.map((item, index) => (
//             <NavLink key={index} {...item} />
//           ))}
//         </ul>
//       </nav>

//       {/* Logo */}
//       <div className="flex justify-center">
//         <div className="relative h-8 w-32 lg:w-40">
//           <Link href="/">
//             <Image
//               alt="divide by zero logo"
//               src="https://only-education-strapi-media.s3.ap-south-1.amazonaws.com/TEXT_LOGO_white_a6ca930a0e.png"
//               fill
//               className="object-contain"
//               priority
//             />
//           </Link>
//         </div>
//       </div>

//       {/* Right Navigation - Desktop */}
//       <nav className="hidden lg:block">
//         <ul className="flex items-center justify-end gap-x-1.5">
//           {rightNavItems.map((item, index) => (
//             <NavLink key={index} {...item} />
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {[...navItems, ...rightNavItems].map((item: any, index) => (
//               <button
//                 key={`mobile-${index}`}
//                 className="block w-full text-left px-3 py-2 text-base flex items-center gap-2"
//               >
//                 {item.icon && <item.icon className="w-4 h-4" />}
//                 <span>{item.label}</span>
//                 {item.count && <span>{item.count}</span>}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// </header>