import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <FooterSection>
      <Title>Call us</Title>
      <Details className="text-muted">+1.514.398.8523</Details>
    </FooterSection>
    <FooterSection>
      <Title>Address</Title>
      <Details className="text-muted">
        Department of Molecular Neurogenetics
        <br />
        McGill University/MNI
        <br />
        3801 rue University, Room 660
        <br />
        Montreal, Quebec
        <br />
        CANADA H3A 2B4
      </Details>
    </FooterSection>
    <FooterSection>
      <Title>E-Mail</Title>
      <Details className="text-muted">eric@ericpc.mni.mcgill.ca</Details>
    </FooterSection>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  display: flex;
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
