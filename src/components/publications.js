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
  text-align: center;
`
const PublicationAuthors = styled.div`
  text-align: center;
`
const PublicationJournal = styled.div`
  text-align: center;
`

const data = {
  2018: [
    { id: 1, title: 'Publication 1', journal: 'Journal', authors: 'Authors' },
    { id: 2, title: 'Publication 2', journal: 'Journal', authors: 'Authors' },
    { id: 3, title: 'Publication 3', journal: 'Journal', authors: 'Authors' },
  ],
  2017: [
    { id: 1, title: 'Publication 1', journal: 'Journal', authors: 'Authors' },
    { id: 2, title: 'Publication 2', journal: 'Journal', authors: 'Authors' },
    { id: 3, title: 'Publication 3', journal: 'Journal', authors: 'Authors' },
    { id: 4, title: 'Publication 3', journal: 'Journal', authors: 'Authors' },
    { id: 5, title: 'Publication 3', journal: 'Journal', authors: 'Authors' },
  ],
  2016: [
    { id: 1, title: 'Publication 1', journal: 'Journal', authors: 'Authors' },
  ],
}
