import React from 'react'
import styled from 'styled-components'

const content = {
  image: 'http://placehold.it/300x200',
  text:
    'The Shoubridge laboratory at the McGill University in Montreal has a long-standing experience in finding the genetic cause of mitochondrial oxidative phosphorylation deficiencies in both adults and children. The laboratory’s interest lies in deciphering the function of nuclear encoded mitochondrial proteins and their role in mitochondrial disease pathology at a molecular level. More recently, we are using BioID, a proximity biotinylation assay, to create a mitochondrial interaction network, in order to study interfaces between mitochondria and other cellular compartments, as well as functional context of newly identified proteins within mitochondrial RNA granules.',
}

const About = () => (
  <AboutContainer>
    <AboutTitle>About The Lab</AboutTitle>
    <AboutGridContainer>
      <AboutLeftContainer>
        <img src={content.image} alt="" />
      </AboutLeftContainer>
      <AboutRightContainer>
        <p>{content.text}</p>
      </AboutRightContainer>
    </AboutGridContainer>
  </AboutContainer>
)

const AboutTitle = styled.h2``
const AboutContainer = styled.div``
const AboutGridContainer = styled.div`
  display: flex;
`
const AboutLeftContainer = styled.div`
  display: inline-block;
  flex-grow: 1;
  margin-right: 40px;
`
const AboutRightContainer = styled.div`
  flex-grow: 2;
  display: inline-block;
`

export default About
