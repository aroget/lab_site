import React from 'react'
import styled, { keyframes } from 'styled-components'

const FadeInDown = ({ children }) => (
  <FadeInDownContainer>{children}</FadeInDownContainer>
)

export default FadeInDown

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const FadeInDownContainer = styled.div`
  opacity: 0;
  transition-delay: 0ms !important;
  transition-duration: 100ms !important;
  animation: ${fadeInDown} 1s cubic-bezier(0.5, 0, 0.415, 0.955) forwards;
`
