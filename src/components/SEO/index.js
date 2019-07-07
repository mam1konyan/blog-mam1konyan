import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        author
        image
      }
    }
  }
`

export default function SEO({
  title,
  description,
  isArticle,
  postUrl,
  postImage,
  author,
}) {
  const { site } = useStaticQuery(query)

  const { siteDesc, siteTitle, siteUrl, image, authorName } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "hy" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="author" content={authorName || author} />
      <meta name="image" content={postImage || image} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${siteUrl}${postUrl || ""}`} />
      <meta property="og:image" content={postImage || image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:description" content={description || siteDesc} />
    </Helmet>
  )
}
