import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Event from "./Event"
//import Bio from "./Bio"
import { getTranslation } from "../utils/translations/helpers"

const EventContainer = styled.ul`
  margin: 0 auto;
  list-style-type: none;
  display: grid;
  grid-gap: 1rem;

  @supports (width: min(2rem, 100%)) {
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
  }
`
/*
const OrganizerContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 1em;
  row-gap: 1em;
  @media (max-width: 650px) {
    grid-template-columns: 100%;
  }
`
*/

const IndexPage = ({ events, langCode }) => {
  // const organizers = data.organizers.edges <-- This has to be added as props when we'll add it

  return (
    <>
      <h1>{getTranslation(langCode, "frontpage.title")}</h1>
      <h2>{getTranslation(langCode, "frontpage.preamble")}</h2>
      <p>{getTranslation(langCode, "frontpage.infotext")}</p>
      <h2>{getTranslation(langCode, "frontpage.past-events")}</h2>

      <EventContainer>
        {events.map(event => (
          <li key={event.node.frontmatter.title}>
            <Event
              title={event.node.frontmatter.title}
              date={event.node.frontmatter.date}
              host={event.node.frontmatter.host}
              slug={event.node.fields.slug}
            />
          </li>
        ))}
      </EventContainer>
      {/* TODO implement this */}
      {/* <OrganizerContainer>
        {organizers.map(organizer => <Bio
          key={organizer.node.frontmatter.github}
          name={organizer.node.frontmatter.name}
          github={organizer.node.frontmatter.github}
        />)}
      </OrganizerContainer> */}
    </>
  )
}

IndexPage.propTypes = {
  events: PropTypes.any,
  langCode: PropTypes.string,
}

export default IndexPage
