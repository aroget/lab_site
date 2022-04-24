import React, { Fragment } from 'react'
import styled from 'styled-components'

import StaffAvatar from './avatars'

const Staff = () => (
  <StaffContainer>
    <StaffTitle>Members</StaffTitle>
    {Object.keys(members).map(group => (
      <Fragment key={group}>
        <StaffGroupTitle>{group}</StaffGroupTitle>
        <StaffGroup groupName={group} />
      </Fragment>
    ))}
  </StaffContainer>
)

const StaffMember = ({ details }) => {
  const {
    first_name,
    last_name,
    position,
    image_url,
    email,
    description,
  } = details

  return (
    <StaffMemberContainer>
      <StaffAvatar image={image_url} hoverText={description} />
      <p>
        {first_name} {last_name}
      </p>
      <span className="text-muted">{position}</span>
      <a href={`mailto:${email}`} style={{ color: 'var(--dark)' }}>
        {email}
      </a>
    </StaffMemberContainer>
  )
}

const StaffGroup = ({ groupName }) => (
  <StaffGroupContainer>
    <StaffList>
      {members[groupName].map(member => (
        <StaffMember key={member.id} details={member} />
      ))}
    </StaffList>
  </StaffGroupContainer>
)

const StaffTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
`
const StaffContainer = styled.div``
const StaffMemberContainer = styled.div`
  width: 310px;
  text-align: center;
  margin-bottom: 20px;

  & > p {
    margin-bottom: 5px;
  }

  & > a,
  & > span {
    display: block;
    font-size: 0.9rem;
  }
`
const StaffGroupTitle = styled.h3`
  text-align: center;
  text-transform: capitalize;
`
const StaffList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const StaffGroupContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`

export default Staff

const members = {
  pI: [
    {
      id: 1,
      first_name: 'Eric',
      last_name: 'Shoubridge',
      position: 'Group Leader',
      email: 'eric.shoubridge@mcgill.ca',
      image_url: 'eric',
      description:
        'I started my academic life as an evolutionary ecologist at McGill, did a PhD in comparative metabolic biochemistry at UBC, briefly got seduced by NMR technology as a post-doc at Oxford, helped establish in vivo NMR spectroscopy at the MNI, then took a sharp turn towards human genetics, with a focus on mitochondrial disease, where I found my home.',
    },
  ],
  staff: [
    {
      id: 1,
      first_name: 'Hana',
      last_name: 'Antonicka',
      email: 'hana.antonicka@mcgill.ca',
      position: 'Research Associate',
      image_url: 'hana',
      description:
        "Hana trained in Prague studying cytochrome c oxidase and ATPase assembly before joining Eric's lab in 2000 as a PostDoc. Now a Research Associate she widened the picture of RNA granules in mitochondria and lately by studying the mitochondrial interactome through a biotin proximity assay (BirA).",
    },
    {
      id: 2,
      first_name: 'Alexandre',
      last_name: 'Janer',
      email: 'alexandre.janer@mcgill.ca',
      position: 'Research Associate',
      image_url: 'alex',
      description:
        'From Paris, France, Alex joined the lab in 2010 as a postdoctoral fellow and is now a research associate focusing his research on establishing the connections mitochondrial proteins make with other organelles using his favourite protein, SLC25A46, as a model. He also likes fishing, Ultimate Frisbee and Indie Rock.',
    },
    {
      id: 3,
      first_name: 'Kathleen',
      last_name: 'Daigneault',
      email: 'kathleen.daigneault@mcgill.ca',
      position: 'Research Assistant',
      image_url: 'kathleen',
      description:
        'A French-Canadian local, Kathleen has been a Research Assistant in the lab since 2014.  She is supporting all our projects but focuses mainly on designing and validating mitochondrial proteins for the BirA biotinylation assay. Kathleen is an experienced, very valued and trusted organizer of the group and facilitates the work flow for everyone.',
    },
  ],
  postdocs: [
    {
      id: 1,
      first_name: 'Archita',
      last_name: 'Rajasekharan',
      email: 'archita.rajasekharan@mcgill.ca',
      position: 'PostDoc',
      image_url: 'archita',
      description:
        'Archita made her journey all the way from India where she studied lipid transfer executed by biogenic membrane flippases in ER and chloroplast membranes of plants. Here, she is joining forces with Alex to decipher the role of lipid transfer and not yet described roles of outer membrane proteins in ER-Mito contact.',
    },
    {
      id: 2,
      first_name: 'Mari',
      last_name: 'Aaltonen',
      email: 'mari.aaltonen@mcgill.ca',
      position: 'PostDoc',
      image_url: 'mari',
      description:
        'Mari from Finland joined the lab recently as a postdoc. She finished her PhD in Germany where she studied phospholipid transport and synthesis in mitochondria. Now she is working on characterizing new players at the ER-mitochondria contact sites. In her free time she likes to enjoy nature and travel.',
    },
  ],
  students: [
    {
      id: 3,
      first_name: 'Jana',
      email: 'jana.schuettpelz@mail.mcgill.ca',
      last_name: 'Schüttpelz',
      position: 'PhD Student',
      image_url: 'jana',
      description:
        'Trained and raised in Germany in molecular medicine in Göttingen, Jana is now working on mitochondrial outer membrane proteins particularly on mitochondrial solute carrier protein family SLC25. She always provides us with fresh pastries and enjoys rock climbing, skiing and music in her free time.',
    },
    {
      id: 4,
      first_name: 'Anja',
      email: 'anja.deiser@mail.mcgill.ca',
      last_name: 'Deiser',
      position: 'Master Student',
      image_url: 'anja',
      description:
        "Originally from Munich Germany, Anja is a Master's student working on identification of changes in mitochondrial interactome in patient cells using BioID. She loves outdoors, climbing and music.",
    },
  ],
}
