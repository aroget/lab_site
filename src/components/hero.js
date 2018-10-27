import React from 'react'
import styled from 'styled-components'

const Hero = () => <HeroContainer />

export default Hero

const HeroContainer = styled.div`
  height: 800px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/static/hero.jpg');
`
