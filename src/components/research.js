import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import ResearchImage from './research-image'
import { BioId, ErMito, ImsAls, RnaGranules } from './icons'

function createMarkUp(__html) {
  return { __html }
}

const topics = [
  {
    id: 1,
    title: 'Mitochondrial Interactome',
    icon: <BioId />,
    image: 'mitochondrial_interactome',
    description:
      '<p>To better comprehend the role of individual functional networks within mitochondria and between mitochondria and the remainder of the cell, we established a mitochondrial interactome using a proximity biotinylation assay, BioID.</p> <p>BioID uses a promiscuous biotin ligase covalently fused to a protein of interest (bait), which subsequently biotinylates proteins in the vicinity of the bait. Using BioID we can identify novel mitochondrial proteins, determine the localization of an individual protein within the mitochondrion as well as within a functional network, and identify novel roles for proteins both within and outside the mitochondria. In addition, we are investigating how individual interactomes change when mutant protein variants are present, yielding insight into possible pathogenic mechanisms and potential treatment targets. Hana is the specialist when it comes to Bio-ID.</p>',
  },
  {
    id: 2,
    title: 'Neurodegenerative Disease',
    icon: <ImsAls />,
    image: 'neurodegenerative_disease',
    description:
      '<p>The recent reports of mutations in coiled-helix-coiled-helix domain containing protein 10 (CHCHD10) in autosomal dominant familial ALS, and in its paralogue CHCHD2 in autosomal dominant Parkinson’s disease, have opened a new window on mitochondrial dysfunction in neurodegenerative disorders. CHCHD10 mutations were first uncovered by whole exome sequencing in a family with motor neuron disease, FTD-like symptoms, cerebellar ataxia and myopathy.</p><p>Both CHCHD10 and CHCHD2 are members of the twin CX9C motif family, most of which are targeted to the mitochondrial intermembrane space (IMS) by a specific protein import system.</p><p>The essential function and the mechanism of pathogenesis remain unknown. Our studies focus on deciphering the role of CHCHD10 and CHCHD2 in mitochondria. Isabella is tackling this question by working in mammalian cell lines and neurons and applying a wide range of cell biological methods.</p>',
  },
  {
    id: 3,
    title: 'ER-Mito Contact Sites',
    image: 'er_mito_contact_sites',
    icon: <ErMito />,
    description:
      '<p>Mitochondrial fusion and fission are highly dynamic processes and the former is regulated by the concerted action of mitofusion1/2 and OPA1 coordinated by Ugo1. We identified a novel homozygous missense mutation (c.425C > T) in SLC25A46, the human orthologue of Ugo1 in a Leigh syndrome patient.</p> <p>SLC25A46 is known to be a mitochondria solute carrier protein and it promotes mitochondrial fission. SLC25A46 patient derived fibroblasts reveal altered mitochondrial and ER architecture associated with disrupted MICOS complex as well as altered lipid composition suggesting that SLC25A46 could be a putative lipid transfer protein at ER-Mito contact sites. To this end a sensitive proximity-based biotinylation assay for identifying the interactome of SLC25A46 was done in order to elucidate its function.</p> <p>This screen has revealed promising uncharacterized proteins which most likely have important roles at the ER-Mito contact site and are currently being explored by Alexandre, Archita, Mari and Jana.</p>',
  },
  {
    id: 4,
    title: 'RNA Metabolism',
    image: 'rna_metabolism',
    icon: <RnaGranules />,
    description:
      '<p>Mitochondrial RNA granules, which we initially identified as GRSF1 positive foci, have been shown to play an essential role in post-transcriptional regulation of mitochondrial transcripts, as well as in the early steps of mitochondrial ribosome biogenesis. They contain proteins responsible for post-transcriptional handling of mitochondrial transcripts: enzymes involved in primary transcript processing, modification, polyadenylation and degradation of mitochondrial RNA.</p><p>Hana’s and Shamisa’s research focuses on the characterization of the molecular functions of several of these proteins (e.g. LRPPRC, FASTKD2, FASTKD5, pseudouridine synthases) and their link to mitochondrial disease.</p>',
  },
]

const ResearchNavbar = ({ clikHandler, active }) =>
  topics.map(t => (
    <ResearchNavItem
      meta={t}
      key={t.id}
      active={active}
      clikHandler={clikHandler.bind(this, t)}
    />
  ))

const ResearchNavItem = ({ meta, clikHandler, active }) => {
  const { icon, title, id } = meta
  return (
    <UnstyledButton
      onClick={clikHandler}
      className={id === active ? 'active' : null}
    >
      <div style={{ width: '50px', margin: '0 auto 15px auto' }}>{icon}</div>
      {title}
    </UnstyledButton>
  )
}

const ActiveResearch = ({ topic: { image, description } }) => {
  return (
    <Fragment>
      <ActiveResearchContainer
        dangerouslySetInnerHTML={createMarkUp(description)}
      />
      <ActiveResearchImage>
        <ResearchImage image={image} />
      </ActiveResearchImage>
    </Fragment>
  )
}

class Research extends Component {
  state = {
    currentView: topics[0],
  }

  onNavbarClick(selected) {
    this.setState({ currentView: selected })
  }

  render() {
    return (
      <ResearchContainer>
        <ResearchSectionTitle>Research</ResearchSectionTitle>
        <ResearcNavBarContainer>
          <ResearchNavbar
            active={this.state.currentView.id}
            clikHandler={this.onNavbarClick.bind(this)}
          />
        </ResearcNavBarContainer>
        <ResearchActiveContainer>
          <ActiveResearch topic={this.state.currentView} />
        </ResearchActiveContainer>
      </ResearchContainer>
    )
  }
}

export default Research

const ResearchContainer = styled.div``

const ActiveResearchContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  column-count: 2;

  @media (max-width: 870px) {
    width: 100%;
  }
`

const ActiveResearchImage = styled.div`
  margin: 25px auto;
  text-align: center;
`

const ResearcNavBarContainer = styled.nav`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 60px auto 50px auto;

  @media (max-width: 870px) {
    flex-flow: wrap;
  }
`

const ResearchActiveContainer = styled.div``

const UnstyledButton = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  position: relative;
  margin-right: 15px;
  margin-bottom: 20px;
  background: transparent;

  & > img {
    margin: 0 auto;
    display: block;
    margin-bottom: 12px;
  }

  &.active:before {
    left: 0;
    content: '';
    width: 100%;
    bottom: -5px;
    position: absolute;
    border: 1px solid #cdcdcd;
  }

  &:focus {
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 870px) {
    width: 48%;
  }

  @media (max-width: 870px) {
    & > img {
      width: 120px;
    }
  }
`
const ResearchSectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
`
