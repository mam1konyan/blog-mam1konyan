import React from "react"
import Layout from "../components/layout"
import "../styles/styles.scss"
import "./styles.scss"
import { Typing } from "react-typing"
import Content from "../components/content"
import SEO from "../components/SEO"

export default () => {
  return (
    <>
      <Layout isArrowShown={null}>
        <SEO title="Գլխավոր" description="Բլոգ ծրագրավորման մասին և ոչ միայն" author="Paruyr Mamikonyan" />
        <section className="home__wrapper">
          <div className="home__image-wrapper">
            <div className="home__body">
              <p className="home__text">
                <Typing delay={25} keyDelay={30}>
                  Ողջույն։ Ես Պարույրն եմ։
                  <br />
                  Չեմ խոստանում, բայց ժամանակ առ ժամանակ ես կփորձեմ կիսվել
                  հետաքրքիր թեմաներով ծրագրավորման մասին (և ոչ միայն) այս
                  բլոգում։
                  <br />
                  Բարի ժամանց!
                </Typing>
              </p>
            </div>
          </div>
          <div className="home__content">
            <Content />
          </div>
        </section>
      </Layout>
    </>
  )
}
