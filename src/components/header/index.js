import React from "react"
import "./styles.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import socialIcons from "../../constants/social-icons"
import { graphql, useStaticQuery } from "gatsby"
import { FaChevronLeft } from "react-icons/fa"

const query = graphql`
  {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          src
        }
      }
    }
  }
`

export default function Header({ isArrowShown }) {
  const imageData = useStaticQuery(query)

  return (
    <header className="header__wrapper">
      <div className="header__body">
        <AniLink
          className="header__logo"
          cover
          duration={1}
          to="/"
          direction="right"
          bg={`
          url(${imageData.file.childImageSharp.fluid.src})
            center / cover   /* position / size */
            no-repeat        /* repeat */
            fixed            /* attachment */
            padding-box      /* origin */
            content-box      /* clip */
            white            /* color */
          `}
        >
          {isArrowShown && <FaChevronLeft />}
          <span className="header__logo-text">mam1konyan</span>
        </AniLink>
        <nav className="header__social-icons">
          {socialIcons.map(item => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
