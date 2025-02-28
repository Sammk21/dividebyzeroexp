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
      <div className="w-[100dvw]">
        <Nav />
        <div className="">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}
