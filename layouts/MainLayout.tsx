import Header from "@components/header"
import Footer from "@components/footer"
import SiteNavbar from "@components/SiteNavbar";
import type { ReactNode } from "react"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <SiteNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}