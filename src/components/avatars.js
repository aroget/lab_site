import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const StaffAvatar = ({ image }) => (
  <StaticQuery
    query={graphql`
      query {
        alex: file(relativePath: { eq: "staff/alex.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        archita: file(relativePath: { eq: "staff/archita.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        eric: file(relativePath: { eq: "staff/eric.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        hana: file(relativePath: { eq: "staff/hana.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        isabella: file(relativePath: { eq: "staff/isabella.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        jana: file(relativePath: { eq: "staff/jana.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        kathleen: file(relativePath: { eq: "staff/kathleen.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mari: file(relativePath: { eq: "staff/mari.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        shamisa: file(relativePath: { eq: "staff/shamisa.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      return <Img fixed={data[image].childImageSharp.fixed} />
    }}
  />
)

export default StaffAvatar
