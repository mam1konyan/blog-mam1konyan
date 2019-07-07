import React from "react"
import "./styles.scss"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Card(props) {
  return (
    <AniLink
      cover
      duration={1}
      to={props.url}
      direction="left"
      bg={`
              url(${props.imageSrc})
              center / cover   /* position / size */
              no-repeat        /* repeat */
              fixed            /* attachment */
              padding-box      /* origin */
              content-box      /* clip */
              white            /* color */`}
    >
      <div className="card__wrapper">
        <div className="card__image">
          <Img fluid={props.image} />
        </div>
        <div className="card__info">
          <h3 title={props.title}>{props.title}</h3>
          <h4 title={props.date}>{props.date}</h4>
        </div>
      </div>
    </AniLink>
  )
}
