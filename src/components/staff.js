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
  const name = `${first_name} ${last_name}`

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
      email: 'eric@email.com',
      image_url: 'eric',
      description:
        'Esse omnis repellat dignissimos doloremque non aliquam rerum asperiores, nobis, exercitationem sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
  ],
  staff: [
    {
      id: 1,
      first_name: 'Hana',
      last_name: 'Antonicka',
      email: 'hana@email.com',
      position: 'Research Associate',
      image_url: 'hana',
      description:
        'Exercitationem sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
    {
      id: 2,
      first_name: 'Alexandre',
      last_name: 'Janer',
      email: 'alex@email.com',
      position: 'Research Associate',
      image_url: 'alex',
      description:
        'Sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
    {
      id: 3,
      first_name: 'Kathleen',
      last_name: 'Daigneault',
      email: 'kathleen@email.com',
      position: 'Research Assistant',
      image_url: 'kathleen',
      description:
        'Nobis, exercitationem sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
  ],
  postdocs: [
    {
      id: 1,
      first_name: 'Archita',
      last_name: 'Rajasekharan',
      email: 'archita@email.com',
      position: 'PostDoc',
      image_url: 'archita',
      description:
        'Distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
    {
      id: 2,
      first_name: 'Mari',
      last_name: 'Aaltonen',
      email: 'mari@email.com',
      position: 'PostDoc',
      image_url: 'mari',
      description:
        'Esse omnis repellat dignissimos doloremque non aliquam rerum asperiores, nobis, exercitationem sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
  ],
  students: [
    {
      id: 1,
      first_name: 'Shamisa',
      last_name: 'Honarmand',
      email: 'shamisa@email.com',
      position: 'PhD Student',
      image_url: 'shamisa',
      description:
        'Esse omnis repellat dignissimos doloremque non aliquam rerum asperiores, nobis, exercitationem sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
    {
      id: 2,
      first_name: 'Isabella',
      last_name: 'Straub',
      email: 'isabella@email.com',
      position: 'PhD Student',
      image_url: 'isabella',
      description:
        'Esse omnis repellat dignissimos doloremque non aliquam rerum asperiores, nobis, exercitationem sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
    {
      id: 3,
      first_name: 'Jana',
      email: 'jana@email.com',
      last_name: 'Schüttpelz',
      position: 'PhD Student',
      image_url: 'jana',
      description:
        'Esse omnis repellat dignissimos doloremque non aliquam rerum asperiores, nobis, exercitationem sequi distinctio debitis doloribus, ab tenetur eligendi? Laborum necessitatibus a dolorum.',
    },
  ],
}
