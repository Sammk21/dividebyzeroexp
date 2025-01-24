import { Metadata } from "next"
import "styles/fit-font.css"
import "styles/globals.css"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import Preloader from "./preLoader/preloader"
import { AnnouncementBar } from "components/announcement-bar"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="whole-body">
        <Nav />
        <div className="mt-28 sm:mt-24">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}
