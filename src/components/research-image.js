import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const ResearchImage = ({ image }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          er_mito_contact_sites: file(
            relativePath: { eq: "research/er_mito_contact_sites.png" }
          ) {
            childImageSharp {
              fixed(width: 350, height: 255) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          mitochondrial_interactome: file(
            relativePath: { eq: "research/mitochondrial_interactome.png" }
          ) {
            childImageSharp {
              fixed(width: 350, height: 203) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          neurodegenerative_disease: file(
            relativePath: { eq: "research/neurodegenerative_disease.png" }
          ) {
            childImageSharp {
              fixed(width: 313, height: 203) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          rna_metabolism: file(
            relativePath: { eq: "research/rna_metabolism.png" }
          ) {
            childImageSharp {
              fixed(width: 366, height: 372) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Img fixed={data[image].childImageSharp.fixed} />}
    />
  )
}

export default ResearchImage
