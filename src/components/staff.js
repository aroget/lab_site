import React, { Fragment } from 'react'
import styled from 'styled-components'

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
  const { first_name, last_name, position, image_url } = details

  return (
    <StaffMemberContainer>
      <img src={image_url} alt={`${first_name} ${last_name}`} />
      <p>
        {first_name} {last_name}
      </p>
      <span className="text-muted">{position}</span>
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

const StaffTitle = styled.h2``
const StaffContainer = styled.div``
const StaffMemberContainer = styled.div`
  width: 300px;
  margin-bottom: 20px;

  & > p {
    margin-bottom: 5px;
  }

  & > span {
    font-size: 0.9rem;
  }
`
const StaffGroupTitle = styled.h3`
  text-transform: capitalize;
`
const StaffList = styled.div`
  display: flex;
  flex-flow: row wrap
  justify-content: flex-start;
`
const StaffGroupContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`

export default Staff

const members = {
  pi: [
    {
      id: 1,
      first_name: 'Eric',
      last_name: 'Shoubridge',
      position: 'Principal Investigator',
      image_url: 'http://placehold.it/240x200',
    },
  ],
  staff: [
    {
      id: 1,
      first_name: 'Alexandre',
      last_name: 'Janer',
      position: 'Research Associate',
      image_url: 'http://placehold.it/240x200',
    },
    {
      id: 2,
      first_name: 'Hana',
      last_name: 'Antonicka',
      position: 'Research Associate',
      image_url: 'http://placehold.it/240x200',
    },
    {
      id: 3,
      first_name: 'Kathleen',
      last_name: 'Daigneault',
      position: 'Research Assistant',
      image_url: 'http://placehold.it/240x200',
    },
  ],
  students: [
    {
      id: 1,
      first_name: 'Archita',
      last_name: 'Rajasekharan',
      position: 'PostDoc',
      image_url: 'http://placehold.it/240x200',
    },
    {
      id: 2,
      first_name: 'Isabella',
      last_name: 'Straub',
      position: 'PhD Student',
      image_url: 'http://placehold.it/240x200',
    },
    {
      id: 3,
      first_name: 'Mari',
      last_name: 'Aaltonen',
      position: 'PostDoc',
      image_url: 'http://placehold.it/240x200',
    },
    {
      id: 4,
      first_name: 'Shamisa',
      last_name: 'Honarmand',
      position: 'PhD Student',
      image_url: 'http://placehold.it/240x200',
    },
    {
      id: 5,
      first_name: 'Jana',
      last_name: 'Schüttpelz',
      position: 'PhD Student',
      image_url: 'http://placehold.it/240x200',
    },
  ],
}
