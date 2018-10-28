import React from 'react'
import styled from 'styled-components'

import Hero from '../components/hero'
import About from '../components/about'
import Staff from '../components/staff'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Support from '../components/support'
import Reaserch from '../components/research'
import Container from '../components/container'
import Publications from '../components/publications'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Container>
      <IndexSection id="about">
        <About />
      </IndexSection>
      <IndexSection id="research">
        <Reaserch />
      </IndexSection>
      <IndexSection id="staff">
        <Staff />
      </IndexSection>
      <IndexSection id="publications">
        <Publications />
      </IndexSection>
      <IndexSection id="support">
        <Support />
      </IndexSection>
      <IndexSection>
        <Footer />
      </IndexSection>
    </Container>
  </Layout>
)

export default IndexPage

const IndexSection = styled.section`
  padding: 90px 0;
  border-bottom: 1px solid #ddd;

  &:first-child {
    padding-top: 50px;
  }

  &:last-child {
    border-bottom: none;
  }
`
