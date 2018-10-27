import React from 'react'
import styled from 'styled-components'

import Hero from '../components/hero'
import About from '../components/about'
import Staff from '../components/staff'
import Layout from '../components/layout'
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
    </Container>
  </Layout>
)

export default IndexPage

const IndexSection = styled.section`
  margin: 80px 0;

  &:first-child {
    margin-top: 30px;
  }
`
