import React from "react"
import PropTypes from "prop-types"
//import Bio from "./Bio"
import { getTranslation } from "../utils/translations/helpers"
import Events from "./Events"
import { Link } from "gatsby"

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

const IndexPage = ({ events, langCode, pastEvents }) => {
  // const organizers = data.organizers.edges <-- This has to be added as props when we'll add it
  const eventsLink = langCode == "en" ? "/events" : `/${langCode}/events`
  return (
    <>
      <h1>{getTranslation(langCode, "frontpage.title")}</h1>
      <h2>{getTranslation(langCode, "frontpage.preamble")}</h2>
      <p>{getTranslation(langCode, "frontpage.infotext")}</p>
      <h2>{getTranslation(langCode, "frontpage.upcoming-events")}</h2>

      {events.length ? (
        <Events events={events} />
      ) : (
        <div>{getTranslation(langCode, "frontpage.no-upcoming-events")}</div>
      )}
      <h2>{getTranslation(langCode, "frontpage.past-events")}</h2>
      <Events events={pastEvents} />
      <Link to={eventsLink}>
        {getTranslation(langCode, "frontpage.more-past-events")}
      </Link>
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
  pastEvents: PropTypes.any,
}

export default IndexPage
