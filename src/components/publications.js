import React, { Fragment, Component } from 'react'
import styled from 'styled-components'

const PublicationMeta = props => {
  const { title, authors, journal } = props

  return (
    <Fragment>
      <PublicationTitle>{title}</PublicationTitle>
      <PublicationJournal>{journal}</PublicationJournal>
      <PublicationAuthors>{authors}</PublicationAuthors>
    </Fragment>
  )
}

class PublicationGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  clickHandler() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { year, publications } = this.props
    return (
      <Fragment>
        <PublicationGroupTitle
          onClick={this.clickHandler.bind(this)}
          style={{ border: '1px solid var(--grey-1)' }}
        >
          {year}
          <span>{this.state.expanded ? 'Less' : 'More'}</span>
        </PublicationGroupTitle>
        {this.state.expanded
          ? publications.map(p => (
              <PublicationMeta
                key={p.id}
                title={p.title}
                journal={p.journal}
                authors={p.authors}
                style={{ textAlign: 'center' }}
              />
            ))
          : null}
      </Fragment>
    )
  }
}

const Publications = () => (
  <PublicationsContainer>
    <PublicationsTitle>Publications</PublicationsTitle>
    {Object.keys(data)
      .sort((a, b) => a < b)
      .map(year => (
        <PublicationGroup
          style={{ marginBottom: '20px' }}
          key={year}
          year={year}
          publications={data[year]}
        />
      ))}
  </PublicationsContainer>
)

export default Publications

const PublicationsTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
`
const PublicationGroupTitle = styled.p`
  padding: 14px;
  cursor: pointer;
  text-align: left;

  & > span {
    float: right;
    font-size: 0.9rem;
  }
`
const PublicationsContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`

const PublicationTitle = styled.h4`
  margin-bottom: 5px;
`
const PublicationAuthors = styled.div``
const PublicationJournal = styled.div``

const data = {
  2018: [
    {
      id: 1,
      title:
        'RNA modification landscape of the human mitochondrial tRNALys regulates protein synthesis.',
      journal: 'Journal',
      authors:
        'Richter U, Evans ME, Clark WC, Marttinen P, Shoubridge EA, Suomalainen A, Wredenberg A, Wedell A, Pan T, Battersby BJ.',
    },
    {
      id: 2,
      title:
        'LONP1 Is Required for Maturation of a Subset of Mitochondrial Proteins, and Its Loss Elicits an Integrated Stress Response.',
      journal: 'Journal',
      authors: 'Zurita Rendón O, Shoubridge EA.',
    },
  ],
  2017: [
    {
      id: 1,
      title:
        'Loss of CHCHD10-CHCHD2 complexes required for respiration underlies the pathogenicity of a CHCHD10 mutation in ALS.',
      journal: 'Journal',
      authors:
        'Straub IR, Janer A, Weraarpachai W, Zinman L, Robertson J, Rogaeva E, Shoubridge EA.',
    },
    {
      id: 2,
      title:
        'Mitochondrial Replacement Therapy: The Road to the Clinic in Canada.',
      journal: 'Journal',
      authors:
        'Knoppers BM, Leader A, Hume S, Shoubridge EA, Isasi R, Noohi F, Ogbogu U, Ravitsky V, Kleiderman E',
    },
    {
      id: 3,
      title:
        'Loss of hepatic LRPPRC alters mitochondrial bioenergetics, regulation of permeability transition and trans-membrane ROS diffusion.',
      journal: 'Journal',
      authors:
        'Cuillerier A, Honarmand S, Cadete VJJ, Ruiz M, Forest A, Deschênes S, Beauchamp C; LSFC Consortium, Charron G, Rioux JD, Des Rosiers C, Shoubridge EA, Burelle Y',
    },
    {
      id: 4,
      title:
        'Identification and functional characterization of a novel MTFMT mutation associated with selective vulnerability of the visual pathway and a mild neurological phenotype.',
      journal: 'Journal',
      authors:
        'La Piana R, Weraarpachai W, Ospina LH, Tetreault M, Majewski J; Care4Rare Canada Consortium, Bruce Pike G, Decarie JC, Tampieri D, Brais B, Shoubridge EA.',
    },
    {
      id: 5,
      title:
        'A pseudouridine synthase module is essential for mitochondrial protein synthesis and cell viability.',
      journal: 'Journal',
      authors:
        'Antonicka H, Choquet K, Lin ZY, Gingras AC, Kleinman CL, Shoubridge EA.',
    },
  ],
  2016: [
    {
      id: 1,
      title: "Biomedicine: Replacing the cell's power plants.",
      journal: 'Journal',
      authors: 'Shoubridge EA.',
    },
    {
      id: 2,
      title:
        'SLC25A46 is required for mitochondrial lipid homeostasis and cristae maintenance and is responsible for Leigh syndrome.',
      journal: 'Journal',
      authors:
        'Janer A, Prudent J, Paupe V, Fahiminiya S, Majewski J, Sgarioto N, Des Rosiers C, Forest A, Lin ZY, Gingras AC, Mitchell G, McBride HM, Shoubridge EA.',
    },
    {
      id: 3,
      title:
        'Inborn Error of Cobalamin Metabolism Associated with the Intracellular Accumulation of Transcobalamin-Bound Cobalamin and Mutations in ZNF143, Which Codes for a Transcriptional Activator.',
      journal: 'Journal',
      authors:
        'Pupavac M, Watkins D, Petrella F, Fahiminiya S, Janer A, Cheung W, Gingras AC, Pastinen T, Muenzer J, Majewski J, Shoubridge EA, Rosenblatt DS.',
    },
    {
      id: 4,
      title:
        'A Mutation in the Flavin Adenine Dinucleotide-Dependent Oxidoreductase FOXRED1 Results in Cell-Type-Specific Assembly Defects in Oxidative Phosphorylation Complexes I and II.',
      journal: 'Journal',
      authors: 'Zurita Rendón O, Antonicka H, Horvath R, Shoubridge EA.',
    },
    {
      id: 5,
      title: 'MITOCHONDRIA. Mitochondrial disease therapy from thin air?',
      journal: 'Journal',
      authors: 'Shoubridge EA.',
    },
    {
      id: 6,
      title:
        'Autosomal recessive cerebellar ataxia caused by a homozygous mutation in PMPCA.',
      journal: 'Journal',
      authors:
        'Choquet K, Zurita-Rendón O, La Piana R, Yang S, Dicaire MJ; Care4Rare Consortium, Boycott KM, Majewski J, Shoubridge EA, Brais B, Tétreault M.',
    },
  ],
  2015: [
    {
      id: 1,
      title:
        'A Metabolic Signature of Mitochondrial Dysfunction Revealed through a Monogenic Form of Leigh Syndrome',
      journal: 'Journal',
      authors:
        'Thompson Legault J, Strittmatter L, Tardif J, Sharma R, Tremblay-Vaillancourt V, Aubut C, Boucher G, Clish CB, Cyr D, Daneault C, Waters PJ; LSFC Consortium, Vachon L, Morin C, Laprise C, Rioux JD, Mootha VK, Des Rosiers C.',
    },
    {
      id: 2,
      title:
        'Whole-exome sequencing identifies novel ECHS1 mutations in Leigh syndrome.',
      journal: 'Journal',
      authors:
        'Tetreault M, Fahiminiya S, Antonicka H, Mitchell GA, Geraghty MT, Lines M, Boycott KM, Shoubridge EA, Mitchell JJ; Care4Rare Canada Consortium, Michaud JL, Majewski J.',
    },
    {
      id: 3,
      title:
        'An N-terminal formyl methionine on COX 1 is required for the assembly of cytochrome c oxidase.',
      journal: 'Journal',
      authors:
        'Hinttala R, Sasarman F, Nishimura T, Antonicka H, Brunel-Guitton C, Schwartzentruber J, Fahiminiya S, Majewski J, Faubert D, Ostergaard E, Smeitink JA, Shoubridge EA.',
    },
    {
      id: 4,
      title:
        'Mitochondrial RNA Granules Are Centers for Posttranscriptional RNA Processing and Ribosome Biogenesis.',
      journal: 'Journal',
      authors: 'Antonicka H, Shoubridge EA.',
    },
    {
      id: 5,
      title:
        'The 3 addition of CCA to mitochondrial tRNASer(AGY) is specifically impaired in patients with mutations in the tRNA nucleotidyl transferase TRNT1.',
      journal: 'Journal',
      authors:
        'Sasarman F, Thiffault I, Weraarpachai W, Salomon S, Maftei C, Gauthier J, Ellazam B, Webb N, Antonicka H, Janer A, Brunel-Guitton C, Elpeleg O, Mitchell G, Shoubridge EA.',
    },
    {
      id: 6,
      title:
        'RMND1 deficiency associated with neonatal lactic acidosis, infantile onset renal failure, deafness, and multiorgan involvement.',
      journal: 'Journal',
      authors:
        'Janer A, van Karnebeek CD, Sasarman F, Antonicka H, Al Ghamdi M, Shyr C, Dunbar M, Stockler-Ispiroglu S, Ross CJ, Vallance H, Dionne J, Wasserman WW, Shoubridge EA.',
    },
  ],
}
