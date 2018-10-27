import React from 'react'
import styled from 'styled-components'

const Hero = () => <HeroContainer />

export default Hero

const HeroContainer = styled.div`
  height: 500px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('https://source.unsplash.com/random/1200x500/?nature');
`
