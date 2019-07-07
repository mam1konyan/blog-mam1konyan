import React from "react"
import Header from "../header"
import Footer from "../footer"

export default function Layout({ children, isArrowShown }) {
  return (
    <>
      <Header isArrowShown={isArrowShown} />
      {children}
      <Footer />
    </>
  )
}
