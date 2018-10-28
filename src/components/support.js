import React from 'react'
import styled from 'styled-components'

const Support = () => (
  <SupportContainer>
    <SupportTitle>Support</SupportTitle>
    <SupportWrapper>
      <SupportLeftContainer>
        <ThankYouMessage>
          The lab would like to thank the following for their support:
        </ThankYouMessage>
      </SupportLeftContainer>
      <SupportRightContainer>
        <SupportList>
          {supporters.map(supporter => (
            <SupportItem key={supporter.id}>
              <a
                href={supporter.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {supporter.label}
              </a>
            </SupportItem>
          ))}
        </SupportList>
      </SupportRightContainer>
    </SupportWrapper>
  </SupportContainer>
)

export default Support

const SupportContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`
const ThankYouMessage = styled.div`
  font-size: 2rem;
`
const SupportWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const SupportList = styled.ul`
  list-style: none;
  padding-left: 0;
`
const SupportItem = styled.li`
  margin-bottom: 4px;
  & > a {
    color: initial;
  }
`
const SupportLeftContainer = styled.div`
  padding-right: 120px;
`
const SupportRightContainer = styled.div`
  width: 80%;
`
const SupportTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.8rem;
`

const supporters = [
  {
    id: 1,
    label: 'Canadian Institutes of Health Research',
    href: 'http://www.cihr-irsc.gc.ca/e/193.html',
  },
  {
    id: 2,
    label: 'United Mitochondrial Disease Foundation',
    href: 'https://www.umdf.org/',
  },
  { id: 3, label: 'Parkinson Canada', href: 'https://www.parkinson.ca/' },
  {
    id: 4,
    label: 'Muscular Dystrophy Association',
    href: 'https://www.mda.org/',
  },
  { id: 5, label: 'MitoCanada', href: 'http://mitocanada.org/' },
  {
    id: 6,
    label: 'Réseau de Médecine Génétique Appliquée',
    href: 'https://www.rmga.qc.ca/en/',
  },
]
