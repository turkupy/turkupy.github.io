import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Events from "../components/Events"

const EventsPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const pastEvents = data.pastEvents.edges
  const upcomingEvents = data.upcomingEvents.edges

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <h2>Upcoming Events</h2>
      <Events events={upcomingEvents} />
      <h2>Past Events</h2>
      <Events events={pastEvents} />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.any,
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

  query {
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
          lang: { eq: "en" }
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
          lang: { eq: "en" }
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
