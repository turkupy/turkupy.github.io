import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IndexPage from "../components/IndexPage"
import { getLangCode } from "../utils/utils"

const Index = ({ data, location }) => {
  const { pathname } = location
  const langCode = getLangCode(pathname)
  const siteTitle = data.site.siteMetadata.title
  const events = data.events.edges
  // const organizers = data.organizers.edges

  return (
    <Layout langCode={langCode} title={siteTitle}>
      <SEO title={siteTitle} />
      <IndexPage events={events} langCode={langCode} />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.any,
  location: PropTypes.any,
}

export default Index

export const pageQuery = graphql`
  query IndexPageQuery($langCode: String!) {
    site {
      siteMetadata {
        title
      }
    }
    events: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { type: { eq: "event" }, lang: { eq: $langCode } }
      }
    ) {
      edges {
        node {
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
      }
    }
    organizers: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "organizer" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            github
          }
          html
        }
      }
    }
  }
`
