import React from "react"
import { FaCode, FaHeart, FaGlobe } from "react-icons/fa"
import "./styles.scss"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query SiteData {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default function Footer() {
  const { site } = useStaticQuery(getSiteData)
  return (
    <footer className="footer__wrapper">
      <div className="footer__body">
        <FaCode title="Created" className="footer__code" />
        with
        <FaHeart title="love" className="footer__heart" />
        by{" "}
        <a
          href="http://mamikonyan.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`${site.siteMetadata.author} `}
          <sup>
            <FaGlobe />
          </sup>
        </a>
      </div>
    </footer>
  )
}
