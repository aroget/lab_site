import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

class StaffAvatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter() {
    this.setState({ hover: true })
  }

  onMouseLeave() {
    this.setState({ hover: false })
  }

  render() {
    const { image, hoverText } = this.props
    return (
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
            diane: file(relativePath: { eq: "staff/diane.jpg" }) {
              childImageSharp {
                fixed(width: 280, height: 380) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            anja: file(relativePath: { eq: "staff/anja.jpg" }) {
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
            <AvatarWrapper
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            >
              {this.state.hover ? (
                <AvatarDescription>
                  <span style={{ color: 'var(--dark)' }}>{hoverText}</span>
                </AvatarDescription>
              ) : (
                <Img fixed={data[image].childImageSharp.fixed} />
              )}
            </AvatarWrapper>
          )
        }}
      />
    )
  }
}

export default StaffAvatar

const AvatarWrapper = styled.div`
  width: 280px;
  height: 380px;
`

const AvatarDescription = styled.div`
  width: 280px;
  height: 380px;
  padding: 15px;
  display: flex;
  align-items: center;
  background: #f4f4f4;
  box-sizing: border-box;
  box-shadow: 2px 0px 12px rgba(0, 0, 0, 0.2);

  & > span {
    display: block;
  }
`
