import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./styles.scss"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"

export default function Template({ data: { contentfulBlogPost } }) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => (
        <img
          className="template__article-image"
          src={node.data.target.fields.file["en-US"].url}
          alt={node.data.target.fields.file["en-US"].fileName}
        />
      ),
    },
  }

  return (
    <Layout isArrowShown={true}>
      <SEO
        title={contentfulBlogPost.title}
        description={contentfulBlogPost.description}
        isArticle
        postUrl={`/${contentfulBlogPost.slug}`}
        postImage={contentfulBlogPost.image.fluid.src}
      />
      <section className="template__wrapper">
        <div className="template__image-wrapper">
          <Img fluid={contentfulBlogPost.image.fluid} />
        </div>
        <div className="template__body">
          <h1 className="template__title">{contentfulBlogPost.title}</h1>
          <h4 className="template__subtitle">
            {contentfulBlogPost.creationDate}
          </h4>
          <article className="template__text-wrapper">
            {documentToReactComponents(
              contentfulBlogPost.postText.json,
              options
            )}
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      creationDate(formatString: "DD.MM.YYYY")
      title
      description
      slug
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      postText {
        json
      }
    }
  }
`
