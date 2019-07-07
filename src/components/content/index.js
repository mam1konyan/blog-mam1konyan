import React from "react"
import "./styles.scss"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        creationDate(formatString: "DD.MM.YYYY")
        id
        title
        slug
        image {
          fluid(maxWidth: 2160) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default function Content() {
  const {
    allContentfulBlogPost: { nodes },
  } = useStaticQuery(query)

  return (
    <div className="content__wrapper">
      <div className="content__body">
        {nodes.map(node => (
          <Card
            key={node.id}
            title={node.title}
            date={node.creationDate}
            image={node.image.fluid}
            imageSrc={node.image.fluid.src}
            url={`/${node.slug}`}
          />
        ))}
      </div>
    </div>
  )
}
