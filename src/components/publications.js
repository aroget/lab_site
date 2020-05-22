import React, { Fragment, Component } from 'react'
import styled from 'styled-components'

const PublicationMeta = props => {
  const { title, doi, authors, journal } = props

  return (
    <Fragment>
      <PublicationTitle>{title}</PublicationTitle>
      <PublicationJournal>{journal}</PublicationJournal>
      <PublicationAuthors>{authors}</PublicationAuthors>
      {doi && (
        <PublicationDoi href={doi} target="_blank">
          DOI
        </PublicationDoi>
      )}
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
                doi={p.doi}
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

const PublicationDoi = styled.a`
  color: black;
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
const PublicationJournal = styled.div`
  font-style: italic;
`

const data = {
  2020: [
    {
      id: 1,
      title: 'A high-density human mitochondrial proximity interaction network',
      journal: 'bioRxiv 2020.04.01.020479',
      doi: 'https://doi.org/10.1101/2020.04.01.020479',
      authors:
        'Hana Antonicka, Zhen-Yuan Lin, Alexandre Janer, Woranontee Weraarpachai, Anne-Claude Gingras, Eric A. Shoubridge',
    },
    {
      id: 2,
      title:
        'A CHCHD10 variant causing ALS elicits an unfolded protein response through the IRE1/XBP1 pathway',
      journal: 'bioRxiv 2020.05.05.078881',
      doi: 'https://doi.org/10.1101/2020.05.05.078881',
      authors:
        'Isabella R. Straub, Woranontee Weraarpachai, Eric A. Shoubridge',
    },
  ],
  2018: [
    {
      id: 1,
      title:
        'RNA modification landscape of the human mitochondrial tRNALys regulates protein synthesis.',
      journal: 'Nat Commun. Sep 27;9(1):3966.',
      authors:
        'Richter U, Evans ME, Clark WC, Marttinen P, Shoubridge EA, Suomalainen A, Wredenberg A, Wedell A, Pan T, Battersby BJ.',
    },
    {
      id: 2,
      title:
        'LONP1 Is Required for Maturation of a Subset of Mitochondrial Proteins, and Its Loss Elicits an Integrated Stress Response.',
      journal: 'Mol Cell Biol. Sep 28;38(20).',
      authors: 'Zurita Rendón O, Shoubridge EA.',
    },
    {
      id: 3,
      title:
        'Loss of CHCHD10-CHCHD2 complexes required for respiration underlies the pathogenicity of a CHCHD10 mutation in ALS.',
      journal: 'Hum Mol Genet. Jan 1;27(1):178-189.',
      authors:
        'Straub IR, Janer A, Weraarpachai W, Zinman L, Robertson J, Rogaeva E, Shoubridge EA.',
    },
  ],
  2017: [
    {
      id: 1,
      title:
        'Mitochondrial Replacement Therapy: The Road to the Clinic in Canada.',
      journal: 'J Obstet Gynaecol Can. Oct;39(10):916-918',
      authors:
        'Knoppers BM, Leader A, Hume S, Shoubridge EA, Isasi R, Noohi F, Ogbogu U, Ravitsky V, Kleiderman E.',
    },
    {
      id: 2,
      title:
        'Loss of hepatic LRPPRC alters mitochondrial bioenergetics, regulation of permeability transition and trans-membrane ROS diffusion.',
      journal: 'Hum Mol Genet. Aug 15;26(16):3186-3201.',
      authors:
        'Cuillerier A, Honarmand S, Cadete VJJ, Ruiz M, Forest A, Deschênes S, Beauchamp C; LSFC Consortium, Charron G, Rioux JD, Des Rosiers C, Shoubridge EA, Burelle Y.',
    },
    {
      id: 3,
      title:
        'Identification and functional characterization of a novel MTFMT mutation associated with selective vulnerability of the visual pathway and a mild neurological phenotype.',
      journal: 'Neurogenetics. Apr;18(2):97-103.',
      authors:
        'La Piana R, Weraarpachai W, Ospina LH, Tetreault M, Majewski J; Care4Rare Canada Consortium, Bruce Pike G, Decarie JC, Tampieri D, Brais B, Shoubridge EA.',
    },
    {
      id: 4,
      title:
        'A pseudouridine synthase module is essential for mitochondrial protein synthesis and cell viability.',
      journal: 'EMBO Rep. Jan;18(1):28-38.',
      authors:
        'Antonicka H, Choquet K, Lin ZY, Gingras AC, Kleinman CL, Shoubridge EA.',
    },
  ],
  2016: [
    {
      id: 1,
      title: "Biomedicine: Replacing the cell's power plants.",
      journal: 'Nature. Dec 8;540(7632):210-211.',
      authors: 'Shoubridge EA.',
    },
    {
      id: 2,
      title:
        'SLC25A46 is required for mitochondrial lipid homeostasis and cristae maintenance and is responsible for Leigh syndrome.',
      journal: 'EMBO Mol Med. Sep 1;8(9):1019-38.',
      authors:
        'Janer A, Prudent J, Paupe V, Fahiminiya S, Majewski J, Sgarioto N, Des Rosiers C, Forest A, Lin ZY, Gingras AC, Mitchell G, McBride HM, Shoubridge EA.',
    },
    {
      id: 3,
      title:
        'Inborn Error of Cobalamin Metabolism Associated with the Intracellular Accumulation of Transcobalamin-Bound Cobalamin and Mutations in ZNF143, Which Codes for a Transcriptional Activator.',
      journal: 'Hum Mutat. Sep;37(9):976-82.',
      authors:
        'Pupavac M, Watkins D, Petrella F, Fahiminiya S, Janer A, Cheung W, Gingras AC, Pastinen T, Muenzer J, Majewski J, Shoubridge EA, Rosenblatt DS.',
    },
    {
      id: 4,
      title:
        'A Mutation in the Flavin Adenine Dinucleotide-Dependent Oxidoreductase FOXRED1 Results in Cell-Type-Specific Assembly Defects in Oxidative Phosphorylation Complexes I and II.',
      journal: 'Mol Cell Biol. Jul 29;36(16):2132-40.',
      authors: 'Zurita Rendón O, Antonicka H, Horvath R, Shoubridge EA.',
    },
    {
      id: 5,
      title: 'MITOCHONDRIA. Mitochondrial disease therapy from thin air?',
      journal: 'Science. Apr 1;352(6281):31-2.',
      authors: 'Shoubridge EA.',
    },
    {
      id: 6,
      title:
        'Autosomal recessive cerebellar ataxia caused by a homozygous mutation in PMPCA.',
      journal: 'Brain. Mar;139(Pt 3):e19.',
      authors:
        'Choquet K, Zurita-Rendón O, La Piana R, Yang S, Dicaire MJ; Care4Rare Consortium, Boycott KM, Majewski J, Shoubridge EA, Brais B, Tétreault M.',
    },
  ],
  2015: [
    {
      id: 1,
      title:
        'A Metabolic Signature of Mitochondrial Dysfunction Revealed through a Monogenic Form of Leigh Syndrome.',
      journal: 'Cell Rep. Nov 3;13(5):981-9.',
      authors:
        'Thompson Legault J, Strittmatter L, Tardif J, Sharma R, Tremblay-Vaillancourt V, Aubut C, Boucher G, Clish CB, Cyr D, Daneault C, Waters PJ; LSFC Consortium, Vachon L, Morin C, Laprise C, Rioux JD, Mootha VK, Des Rosiers C.',
    },
    {
      id: 2,
      title:
        'Whole-exome sequencing identifies novel ECHS1 mutations in Leigh syndrome.',
      journal: 'Hum Genet. Sep;134(9):981-91.',
      authors:
        'Tetreault M, Fahiminiya S, Antonicka H, Mitchell GA, Geraghty MT, Lines M, Boycott KM, Shoubridge EA, Mitchell JJ; Care4Rare Canada Consortium, Michaud JL, Majewski J.',
    },
    {
      id: 3,
      title:
        'An N-terminal formyl methionine on COX 1 is required for the assembly of cytochrome c oxidase.',
      journal: 'Hum Mol Genet. Jul 15;24(14):4103-13.',
      authors:
        'Hinttala R, Sasarman F, Nishimura T, Antonicka H, Brunel-Guitton C, Schwartzentruber J, Fahiminiya S, Majewski J, Faubert D, Ostergaard E, Smeitink JA, Shoubridge EA.',
    },
    {
      id: 4,
      title:
        'Mitochondrial RNA Granules Are Centers for Posttranscriptional RNA Processing and Ribosome Biogenesis.',
      journal: 'Cell Rep. Feb 12. pii: S2211-1247(15)00055-8.',
      authors: 'Antonicka H, Shoubridge EA.',
    },
    {
      id: 5,
      title:
        'The 3 addition of CCA to mitochondrial tRNASer(AGY) is specifically impaired in patients with mutations in the tRNA nucleotidyl transferase TRNT1.',
      journal: 'Hum Mol Genet. May 15;24(10):2841-7.',
      authors:
        'Sasarman F, Thiffault I, Weraarpachai W, Salomon S, Maftei C, Gauthier J, Ellazam B, Webb N, Antonicka H, Janer A, Brunel-Guitton C, Elpeleg O, Mitchell G, Shoubridge EA.',
    },
    {
      id: 6,
      title:
        'RMND1 deficiency associated with neonatal lactic acidosis, infantile onset renal failure, deafness, and multiorgan involvement.',
      journal: 'Eur J Hum Genet. Oct;23(10):1301-7.',
      authors:
        'Janer A, van Karnebeek CD, Sasarman F, Antonicka H, Al Ghamdi M, Shyr C, Dunbar M, Stockler-Ispiroglu S, Ross CJ, Vallance H, Dionne J, Wasserman WW, Shoubridge EA.',
    },
    {
      id: 7,
      title:
        'Mutations in COA3 cause isolated complex IV deficiency associated with neuropathy, exercise intolerance, obesity, and short stature.',
      journal: 'J Med Genet. Mar;52(3):203-7.',
      authors:
        'Ostergaard E, Weraarpachai W, Ravn K, Born AP, Jønson L, Duno M, Wibrand F, Shoubridge EA, Vissing J.',
    },
    {
      id: 8,
      title:
        'CCDC90A (MCUR1) is a cytochrome c oxidase assembly factor and not a regulator of the mitochondrial calcium uniporter.',
      journal: 'Cell Metab. Jan 6;21(1):109-16.',
      authors: 'Paupe V, Prudent J, Dassa EP, Rendon OZ, Shoubridge EA.',
    },
    {
      id: 9,
      title:
        'Sacs knockout mice present pathophysiological defects underlying autosomal recessive spastic ataxia of Charlevoix-Saguenay.',
      journal: 'Hum Mol Genet. Feb 1;24(3):727-39.',
      authors:
        'Larivière R, Gaudet R, Gentil BJ, Girard M, Conte TC, Minotti S, Leclerc-Desaulniers K, Gehring K, McKinney RA, Shoubridge EA, McPherson PS, Durham HD, Brais B.',
    },
    {
      id: 10,
      title:
        'Tissue-specific responses to the LRPPRC founder mutation in French Canadian Leigh Syndrome.',
      journal: 'Hum Mol Genet. Jan 15;24(2):480-91.',
      authors:
        'Sasarman F, Nishimura T, Antonicka H, Weraarpachai W, Shoubridge EA.',
    },
    {
      id: 11,
      title:
        'Mutation in the nuclear-encoded mitochondrial isoleucyl-tRNA synthetase IARS2 in patients with cataracts, growth hormone deficiency with short stature, partial sensorineural deafness, and peripheral neuropathy or with Leigh syndrome.',
      journal: 'Hum Mutat. Nov;35(11):1285-9.',
      authors:
        'Schwartzentruber J, Buhas D, Majewski J, Sasarman F, Papillon-Cavanagh S, Thiffault I, Sheldon KM, Massicotte C, Patry L, Simon M, Zare AS, McKernan KJ; FORGE Canada Consortium, Michaud J, Boles RG, Deal CL, Desilets V, Shoubridge EA, Samuels ME.',
    },
  ],
  '2012-2014': [
    {
      id: 1,
      title:
        'The arginine methyltransferase NDUFAF7 is essential for complex I assembly and early vertebrate embryogenesis.',
      journal: 'Hum Mol Genet. Oct 1;23(19):5159-70.',
      authors: 'Zurita Rendón O, Silva Neiva L, Sasarman F, Shoubridge EA.',
    },
    {
      id: 2,
      title:
        'Novel mutations in SCO1 as a cause of fatal infantile encephalopathy and lactic acidosis.',
      journal: 'Hum Mutat. Oct;34(10):1366-70.',
      authors:
        'Leary SC, Antonicka H, Sasarman F, Weraarpachai W, Cobine PA, Pan M, Brown GK, Brown R, Majewski J, Ha KC, Rahman S, Shoubridge EA.',
    },
    {
      id: 3,
      title:
        'The mitochondrial RNA-binding protein GRSF1 localizes to RNA granules and is required for posttranscriptional mitochondrial gene expression.',
      journal: 'Cell Metab. Mar 5;17(3):386-98.',
      authors: 'Antonicka H, Sasarman F, Nishimura T, Paupe V, Shoubridge EA.',
    },
    {
      id: 4,
      title:
        'COX19 mediates the transduction of a mitochondrial redox signal from SCO1 that regulates ATP7A-mediated cellular copper efflux.',
      journal: 'Mol Biol Cell. Mar;24(6):683-91.',
      authors:
        'Leary SC, Cobine PA, Nishimura T, Verdijk RM, de Krijger R, de Coo R, Tarnopolsky MA, Winge DR, Shoubridge EA.',
    },
    {
      id: 5,
      title:
        'Reconstitution of mitochondria derived vesicle formation demonstrates selective enrichment of oxidized cargo.',
      journal: 'PLoS One. 2012;7(12):e52830.',
      authors:
        'Soubannier V, Rippstein P, Kaufman BA, Shoubridge EA, McBride HM.',
    },
    {
      id: 6,
      title:
        'Subcellular location of MMACHC and MMADHC, two human proteins central to intracellular vitamin B(12) metabolism.',
      journal: 'Mol Genet Metab. Feb;108(2):112-8.',
      authors:
        'Mah W, Deme JC, Watkins D, Fung S, Janer A, Shoubridge EA, Rosenblatt DS, Coulton JW.',
    },
    {
      id: 7,
      title:
        'MITRAC links mitochondrial protein translocation to respiratory-chain assembly and translational regulation.',
      journal: 'Cell. Dec 21;151(7):1528-41.',
      authors:
        'Mick DU, Dennerlein S, Wiese H, Reinhold R, Pacheu-Grau D, Lorenzi I, Sasarman F, Weraarpachai W, Shoubridge EA, Warscheid B, Rehling P.',
    },
    {
      id: 8,
      title:
        'The conserved interaction of C7orf30 with MRPL14 promotes biogenesis of the mitochondrial large ribosomal subunit and mitochondrial translation.',
      journal: 'Mol Biol Cell. Feb;24(3):184-93.',
      authors: 'Fung S, Nishimura T, Sasarman F, Shoubridge EA.',
    },
    {
      id: 9,
      title:
        'An RMND1 Mutation causes encephalopathy associated with multiple oxidative phosphorylation complex deficiencies and a mitochondrial translation defect.',
      journal: 'Am J Hum Genet. Oct 5;91(4):737-43.',
      authors:
        'Janer A, Antonicka H, Lalonde E, Nishimura T, Sasarman F, Brown GK, Brown RM, Majewski J, Shoubridge EA.',
    },
    {
      id: 10,
      title:
        'Mutations in ABCD4 cause a new inborn error of vitamin B12 metabolism.',
      journal: 'Nat Genet. Oct;44(10):1152-5.',
      authors:
        'Coelho D, Kim JC, Miousse IR, Fung S, du Moulin M, Buers I, Suormala T, Burda P, Frapolli M, Stucki M, Nürnberg P, Thiele H, Robenek H, Höhne W, Longo N, Pasquali M, Mengel E, Watkins D, Shoubridge EA, Majewski J, Rosenblatt DS, Fowler B, Rutsch F, Baumgartner MR.',
    },
    {
      id: 11,
      title:
        'Early complex I assembly defects result in rapid turnover of the ND1 subunit.',
      journal: 'Hum Mol Genet. Sep 1;21(17):3815-24.',
      authors: 'Zurita Rendón O, Shoubridge EA.',
    },
    {
      id: 12,
      title:
        'A novel mutation in YARS2 causes myopathy with lactic acidosis and sideroblastic anemia.',
      journal: 'Hum Mutat. Aug;33(8):1201-6.',
      authors: 'Sasarman F, Nishimura T, Thiffault I, Shoubridge EA.',
    },
    {
      id: 13,
      title:
        'Mutations in the mitochondrial methionyl-tRNA synthetase cause a neurodegenerative phenotype in flies and a recessive ataxia (ARSAL) in humans.',
      journal: 'PLoS Biol. 10(3):e1001288.',
      authors:
        'Bayat V, Thiffault I, Jaiswal M, Tétreault M, Donti T, Sasarman F, Bernard G, Demers-Lamarche J, Dicaire MJ, Mathieu J, Vanasse M, Bouchard JP, Rioux MF, Lourenco CM, Li Z, Haueter C, Shoubridge EA, Graham BH, Brais B, Bellen HJ.',
    },
    {
      id: 14,
      title: 'Supersizing the mitochondrial respiratory chain.',
      journal: 'Cell Metab. Mar 7;15(3):271-2.',
      authors: 'Shoubridge EA.',
    },
    {
      id: 15,
      title:
        'Mitochondrial dysfunction and Purkinje cell loss in autosomal recessive spastic ataxia of Charlevoix-Saguenay (ARSACS).',
      journal: 'Proc Natl Acad Sci USA. Jan 31;109(5):1661-6.',
      authors:
        'Girard M, Larivière R, Parfitt DA, Deane EC, Gaudet R, Nossova N, Blondeau F, Prenosil G, Vermeulen EG, Duchen MR, Richter A, Shoubridge EA, Gehring K, McKinney RA, Brais B, Chapple JP, McPherson PS.',
    },
    {
      id: 16,
      title:
        'Mutations in C12orf62, a factor that couples COX I synthesis with cytochrome c oxidase assembly, cause fatal neonatal lactic acidosis.',
      journal: 'Am J Hum Genet. Jan 13;90(1):142-51.',
      authors:
        'Weraarpachai W, Sasarman F, Nishimura T, Antonicka H, Auré K, Rötig A, Lombès A, Shoubridge EA.',
    },
    {
      id: 17,
      title:
        'Radioactive labeling of mitochondrial translation products in cultured cells.',
      journal: 'Methods Mol Biol. 837:207-17.',
      authors: 'Sasarman F, Shoubridge EA.',
    },
  ],
}
