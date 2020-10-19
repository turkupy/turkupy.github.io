import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { colors, borderRadius } from "../utils/styles"
import { formatDate } from "../utils/utils"
import { getTranslation } from "../utils/translations/helpers"

const EventCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2em;
  border: 0.5rem dashed ${colors.darkPink};
  color: ${colors.darkGrey};
  line-height: 2rem;
  min-height: 13em;
  border-radius: ${borderRadius.medium};
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

  &:focus a {
    outline: none;
  }
`

const EventTitle = styled.h3`
  margin-top: 0.8em;
  color: inherit;
  box-sizing: border-box;
  padding: 0.25em;
  border-radius: ${borderRadius.small};
  &:focus-within {
    box-shadow: 0 0 0 0.25em ${colors.lightPink};
  }

  &:focus-within:hover {
    box-shadow: none;
  }

  & > a {
    color: ${colors.darkGrey};
  }

  & > a:hover {
    color: ${colors.darkGrey};
    border-bottom: 0.25rem solid ${colors.lightPink};
  }

  & > a:focus {
    outline: none;
  }

  & > a:hover:focus {
    box-shadow: none;
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

const Event = ({ title, date, host, slug, lang }) => {
  return (
    <EventCard>
      <EventTitle>
        <StyledLink to={slug}>{title} </StyledLink>
      </EventTitle>
      <EventInfo>
        {date && (
          <DateSpan>
            {getTranslation(lang, "frontpage.date")}: {formatDate(date)}
          </DateSpan>
        )}
        {host && (
          <p>
            {getTranslation(lang, "frontpage.hosted-by")} {host}
          </p>
        )}
      </EventInfo>
    </EventCard>
  )
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  host: PropTypes.string,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
  lang: PropTypes.string,
}

export default Event
