import React from 'react'
import styled from 'styled-components'
import background from './hero.jpg'

const Hero = () => (
  <HeroContainer style={{ backgroundImage: `url(${background})` }} />
)

export default Hero

const HeroContainer = styled.div`
  height: 500px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
