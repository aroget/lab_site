import React from 'react'
import styled from 'styled-components'

function createMarkUp(__html) {
  return { __html }
}

const About = () => (
  <AboutContainer>
    <AboutGridContainer>
      <AboutLeftContainer>
        <img src={content.image} alt="" />
      </AboutLeftContainer>
      <AboutRightContainer
        dangerouslySetInnerHTML={createMarkUp(content.text)}
      />
    </AboutGridContainer>
  </AboutContainer>
)

export default About

const AboutContainer = styled.div``
const AboutGridContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;

  @media (max-width: 870px) {
    flex-flow: column;
    text-align: center;
  }
`
const AboutLeftContainer = styled.div`
  flex-grow: 1;
  margin-right: 40px;
  display: inline-block;

  & > img {
    margin-bottom: 20px;
  }
`
const AboutRightContainer = styled.div`
  flex-grow: 2;
  column-count: 2;
  display: inline-block;

  @media (max-width: 870px) {
    text-align: left;
    column-count: 1;
  }
`

const content = {
  image: 'http://placehold.it/300x200',
  text:
    '<p>The Shoubridge laboratory at the McGill University in Montreal has a long-standing experience in finding the genetic cause of mitochondrial oxidative phosphorylation deficiencies in both adults and children.</p><p>The laboratory’s interest lies in deciphering the function of nuclear encoded mitochondrial proteins and their role in mitochondrial disease pathology at a molecular level.</p> <p>More recently, we are using BioID, a proximity biotinylation assay, to create a mitochondrial interaction network, in order to study interfaces between mitochondria and other cellular compartments, as well as functional context of newly identified proteins within mitochondrial RNA granules.<p>',
}
