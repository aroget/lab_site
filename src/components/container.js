import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => <GridContainer>{children}</GridContainer>

const GridContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`

export default Container
