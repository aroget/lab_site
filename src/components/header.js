import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled, { keyframes } from 'styled-components'
import React, { Component } from 'react'

import Container from './container'

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    box-shadow: 2px 0 3px rgba(0, 0, 0, .1)
  }
`

const links = [
  { key: 1, to: '#about', label: 'About' },
  { key: 2, to: '#research', label: 'Research' },
  { key: 3, to: '#group', label: 'Group' },
  { key: 4, to: '#publications', label: 'Publications' },
]

const HERO_HEIGHT = 500

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sticky: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(event) {
    const { pageY } = event
    const sticky = pageY >= HERO_HEIGHT

    this.setState({ sticky })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render() {
    const { siteTitle } = this.props
    const containerClassName = this.state.sticky ? 'sticky' : null

    return (
      <FluidContainer className={containerClassName}>
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
  }
}

export default Header

const Link = styled(AnchorLink)`
  text-decoration: none;
`

const FluidContainer = styled.div`
  z-index: 1;
  width: 100%;
  padding: 0.5rem 0;
  position: absolute;
  background: transparent;

  &.sticky {
    opacity: 0;
    width: 100%;
    position: fixed;
    background: white;
    animation: ${fadeInDown} 500ms cubic-bezier(0.5, 0, 0.415, 0.955) forwards;
  }
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
