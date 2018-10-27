import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import Container from './container'

const links = [
  { key: 1, to: '#about', label: 'About' },
  { key: 2, to: '#research', label: 'Research' },
  { key: 3, to: '#staff', label: 'Staff' },
  { key: 4, to: '#publications', label: 'Publications' },
]

const Header = ({ siteTitle }) => (
  <FluidContainer style={{ background: 'var(--dark)' }}>
    <Container>
      <HeaderWrapper>
        <SiteNameContainer>
          <SiteName>{siteTitle}</SiteName>
        </SiteNameContainer>
        <NavBar>
          {links.map(l => (
            <NavBarItem key={l.key}>
              <AnchorLink
                href={l.to}
                style={{ color: 'var(--light)', textDecoration: 'none' }}
              >
                {l.label}
              </AnchorLink>
            </NavBarItem>
          ))}
        </NavBar>
      </HeaderWrapper>
    </Container>
  </FluidContainer>
)

export default Header

const FluidContainer = styled.div`
  padding: 1rem 0;
`
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavBar = styled.nav``

const SiteNameContainer = styled.div``

const SiteName = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`
const NavBarItem = styled.div`
  display: inline-block;
  margin-right: 15px;
`
