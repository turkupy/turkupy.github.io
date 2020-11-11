import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Events from "../components/Events"
import { getLangCode } from "../utils/utils"
import { getTranslation } from "../utils/translations/helpers"

const EventsPage = ({ data, location }) => {
  const { pathname } = location
  const langCode = getLangCode(pathname)
  const siteTitle = data.site.siteMetadata.title
  const pastEvents = data.pastEvents.edges
  const upcomingEvents = data.upcomingEvents.edges

  return (
    <Layout title={siteTitle} langCode={langCode}>
      <SEO title={siteTitle} />
      <h2>{getTranslation(langCode, "frontpage.upcoming-events")}</h2>
      <Events events={upcomingEvents} />
      <h2>{getTranslation(langCode, "frontpage.past-events")}</h2>
      <Events events={pastEvents} />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.any,
  location: PropTypes.any,
}

export default EventsPage

export const pageQuery = graphql`
  fragment EventsInfoFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      host
      date
      speakers
      lang
    }
  }

  query EventsPageQuery($langCode: String!) {
    site {
      siteMetadata {
        title
      }
    }
    pastEvents: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          type: { eq: "event" }
          lang: { eq: $langCode }
          date: { lte: "now()" }
        }
      }
    ) {
      edges {
        node {
          ...EventsInfoFragment
        }
      }
    }
    upcomingEvents: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          type: { eq: "event" }
          lang: { eq: $langCode }
          date: { gte: "now()" }
        }
      }
    ) {
      edges {
        node {
          ...EventsInfoFragment
        }
      }
    }
  }
`
