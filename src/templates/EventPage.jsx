import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import styled from "styled-components"
import { colors } from "../utils/styles"
import Seo from "../components/Seo"
import { formatDate } from "../utils/utils"

const EventTitle = styled.h1`
  margin-bottom: 0.4em;
`

const EventDetail = styled.p`
  color: ${colors.darkGrey};
  padding-bottom: 1.4em;
`

const EventPage = ({ data }) => {
  const { html, frontmatter, fields } = data.markdownRemark
  const regex = /(\bfi)|(\ben)|(\bsv)/g
  const regexedLangCode = fields.slug.match(regex)
  // Default to en if lang code is not found
  const langCode = regexedLangCode ? regexedLangCode[0] : "en"
  return (
    <Layout langCode={langCode}>
      <Seo title={frontmatter.title} />
      <EventTitle>{frontmatter.title}</EventTitle>
      <EventDetail>
        {formatDate(frontmatter.date)}
        {frontmatter.host ? ` @ ${frontmatter.host}` : ""}
      </EventDetail>

      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

EventPage.propTypes = {
  data: PropTypes.any,
}

export default EventPage

export const pageQuery = graphql`
  query EventsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date
        speakers
        host
        title
      }
      html
    }
  }
`
