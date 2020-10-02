import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import IndexPage from "../../components/IndexPage"

const Index = ({ data }) => {
  const langCode = "fi"
  const siteTitle = data.site.siteMetadata.title
  const events = data.events.edges
  // const organizers = data.organizers.edges

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} lang={langCode} />
      <IndexPage events={events} langCode={langCode} />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.any,
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    events: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "event" }, lang: { eq: "fi" } } }
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
