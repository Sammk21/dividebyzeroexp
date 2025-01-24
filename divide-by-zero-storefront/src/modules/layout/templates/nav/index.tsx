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

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <>
      <header className="fixed top-0 left-0 right-0  z-50">
        {/* <AnnouncementBar /> */}
        <div className="grid grid-cols-2 md:grid-cols-3 px-6 justify-center items-center py-4">
          <Link href="/" className="text-2xl  font-medium tracking-wider">
            <h2 className="tk-fit-extended">Dbz.</h2>
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-8">
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

          <div className="flex items-center  ">
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
          </div>
        </div>
      </header>
    </>
  )
}

