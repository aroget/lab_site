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
  <FluidContainer>
    <Container>
      <HeaderWrapper>
        <SiteNameContainer>
          <SiteName style={{ color: 'var(--dark)' }}>{siteTitle}</SiteName>
        </SiteNameContainer>
        <NavBar>
          {links.map(l => (
            <NavBarItem key={l.key}>
              <Link href={l.to} style={{ color: 'var(--dark)' }}>
                {l.label}
              </Link>
            </NavBarItem>
          ))}
        </NavBar>
      </HeaderWrapper>
    </Container>
  </FluidContainer>
)

export default Header

const Link = styled(AnchorLink)`
  text-decoration: none;
`

const FluidContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  position: absolute;
  background: transparent;
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
  font-weight: 400;
`
const NavBarItem = styled.div`
  display: inline-block;
  margin-right: 15px;
`
