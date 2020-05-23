import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { colors } from "../utils/styles"
import { formatDate } from "../utils/utils"

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2em;
  background-color: ${colors.darkPink};
  color: ${colors.white};
  border: 1px solid ${colors.darkPink};
  min-height: 13em;
  border-radius: 0.3em;
  position: relative;
  &:hover,
  &:focus-within {
    cursor: pointer;
    border: 1px solid ${colors.darkPink};
    background-color: ${colors.white};
    color: ${colors.darkPink};
    transform: rotate(0.8deg);
  }

  &:hover a {
    color: ${colors.darkPink};
  }
`

const EventTitle = styled.h3`
  margin-top: 0.8em;
  color: inherit;

  & > a {
    color: ${colors.white};
  }

  & > a:hover,
  & > a:focus {
    color: ${colors.darkPink};
  }
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

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`

const StyledLink = styled(Link)`
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

const Event = ({ title, date, host, slug }) => {
  return (
    <EventCard>
      <EventTitle>
        <StyledLink to={slug}>{title} </StyledLink>
      </EventTitle>
      <EventInfo>
        {date && <DateSpan>Date: {formatDate(date)}</DateSpan>}
        <HostInfo>Hosted by {host}</HostInfo>
      </EventInfo>
    </EventCard>
  )
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default Event
