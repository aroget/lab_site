import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const StaffAvatar = ({ image, hoverText }) => (
  <StaticQuery
    query={graphql`
      query {
        alex: file(relativePath: { eq: "staff/alex.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        archita: file(relativePath: { eq: "staff/archita.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        eric: file(relativePath: { eq: "staff/eric.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        hana: file(relativePath: { eq: "staff/hana.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        isabella: file(relativePath: { eq: "staff/isabella.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        jana: file(relativePath: { eq: "staff/jana.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        kathleen: file(relativePath: { eq: "staff/kathleen.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mari: file(relativePath: { eq: "staff/mari.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        shamisa: file(relativePath: { eq: "staff/shamisa.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 380) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <AvatarWrapper data-hover={hoverText}>
          <Img fixed={data[image].childImageSharp.fixed} />
        </AvatarWrapper>
      )
    }}
  />
)

export default StaffAvatar

const AvatarWrapper = styled.div`
  position: relative;

  &:hover:after {
    top: 0;

    left: 15px;
    padding: 15px;
    width: 280px;
    height: 380px;
    background: #f4f4f4;
    box-sizing: border-box;
    content: attr(data-hover);
    padding-top: 140px;
    text-align: center;
    position: absolute;
    box-shadow: 2px 0px 12px rgba(0, 0, 0, 0.2);
  }
`
