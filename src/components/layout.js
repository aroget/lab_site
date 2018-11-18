import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'normalize.css'
import './layout.css'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Eric Shoubridge’s laboratory focuses on the molecular genetics of mitochondrial diseases, in particular those that affect the function of the respiratory chain. Mitochondria are essential for a number of cellular processes such as heme and iron-sulfur cluster biosynthesis, and for aerobic energy production. Energy production occurs in the respiratory chain, a system composed of five multi-subunit enzyme complexes whose polypeptide components are encoded in both the nuclear and mitochondrial genomes (mtDNA).',
            },
            {
              name: 'keywords',
              content: 'McGill, Neuroscience, Eric Shoubridge',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
