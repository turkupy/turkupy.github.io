import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Event from "./Event"

const EventContainer = styled.ul`
  margin: 0 auto;
  list-style-type: none;
  display: grid;
  grid-gap: 1rem;

  @supports (width: min(2rem, 100%)) {
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
  }
`

const Events = ({ events }) => {
  return (
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
  )
}

Events.propTypes = {
  events: PropTypes.any,
}

export default Events
