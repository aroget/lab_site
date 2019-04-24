import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <Title>Call us</Title>
      <Details className="text-muted">
        Eric: +1.514.398.1997
        <br />
        Lab: +1.514.398.8523
      </Details>
    </FooterSection>
    <FooterSection>
      <Title>Address</Title>
      <Details className="text-muted">
        Montreal Neurological Institute
        <br />
        McGill University
        <br />
        3801 Rue University, Room 672
        <br />
        Montreal, Quebec
        <br />
        CANADA H3A 2B4
      </Details>
    </FooterSection>
    <FooterSection>
      <Title>E-Mail</Title>
      <Details className="text-muted">eric.shoubridge@mcgill.ca</Details>
    </FooterSection>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`
const FooterSection = styled.div`
  grow: 1;
`

const Title = styled.p`
  margin-bottom: 5px;
`
const Details = styled.p`
  margin-top: 0px;
`
