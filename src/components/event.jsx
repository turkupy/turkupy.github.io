import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { colors } from "../utils/styles"

const EventCard = styled.div`
  padding: 1.2em;
  background-color: ${colors.lightPink};
  color: ${colors.white};
  border: 1px solid ${colors.lightPink};
  min-height: 12em;
  border-radius: 0.3em;
  &:hover {
    border: 1px solid ${colors.lightPink};
    background-color: ${colors.white};
    color: ${colors.lightPink};
    transform: rotate(.8deg);
  }
`

const EventTitle = styled.h3`
  margin-top: .8em;
  color: inherit;
`

const DateSpan = styled.span`
  text-transform: uppercase;
  font-size: 0.9em;
  margin-bottom: 1.2em;
  box-sizing: border-box;
`

const HostInfo = styled.p`
  margin: 0;
`

const Event = ({ title, date, host, slug  }) => {
  return (
    <Link to={slug}>
      <EventCard >
        <EventTitle>{title}</EventTitle>
        {date && <DateSpan>Date: {date}</DateSpan>}
        <HostInfo>Hosted by {host}</HostInfo>
      </EventCard>
    </Link>
  )
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string
}

export default Event