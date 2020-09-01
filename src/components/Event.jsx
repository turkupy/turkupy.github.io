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
  border: 0.5rem dashed ${colors.darkPink};
  color: ${colors.darkGrey};
  line-height: 2rem;
  min-height: 13em;
  border-radius: 0.5em;
  position: relative;
  &:hover,
  &:focus-within {
    cursor: pointer;
    border: 0.5rem solid ${colors.lightPink};
    background-color: ${colors.white};
    transform: rotate(0.8deg);
  }

  &:hover a {
    color: ${colors.darkGrey};
  }
`

const EventTitle = styled.h3`
  margin-top: 0.8em;
  color: inherit;

  & > a {
    color: ${colors.darkGrey};
  }

  & > a:hover,
  & > a:focus {
    color: ${colors.darkGrey};
    border-bottom: 0.25rem solid ${colors.lightPink};
  }
`

const DateSpan = styled.span`
  text-transform: uppercase;
  box-sizing: border-box;
`

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
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
        {host && <p>Hosted by {host}</p>}
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
