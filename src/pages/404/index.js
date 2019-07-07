import React from "react"
import "./styles.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../../components/layout"

export default function ErrorPage() {
  return (
    <Layout isArrowShown={true}>
      <section className="error__wrapper">
        <div className="error__body">
          <p className="error__text">այստեղ դեռևս էջ չկա :( </p>
          <AniLink fade to="/" className="error__button">
            վերադառնալ
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}
