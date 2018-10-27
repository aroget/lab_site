import React from 'react'
import styled, { keyframes } from 'styled-components'

const FadeInUp = ({ children }) => (
  <FadeInUpContainer>{children}</FadeInUpContainer>
)

export default FadeInUp

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const FadeInUpContainer = styled.div`
  opacity: 0;
  transition-delay: 0ms !important;
  transition-duration: 500ms !important;
  animation: ${fadeInUp} 1s cubic-bezier(0.5, 0, 0.415, 0.955) forwards 2s;
`
