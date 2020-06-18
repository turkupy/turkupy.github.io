import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import styled from "styled-components"
import { colors } from "../utils/styles"
import Seo from "../components/Seo"

const EventTitle = styled.h1`
  margin-bottom: 0.4em;
`

const EventDetail = styled.p`
  color: ${colors.darkGrey};
  padding-bottom: 1.4em;
`

const EventPage = ({ data }) => {
  const event = data.markdownRemark
  return (
    <Layout>
      <Seo title={data.markdownRemark.frontmatter.title} />
      <EventTitle>{data.markdownRemark.frontmatter.title}</EventTitle>
      <EventDetail>
        {data.markdownRemark.frontmatter.date} @{" "}
        {data.markdownRemark.frontmatter.host}
      </EventDetail>

      <section dangerouslySetInnerHTML={{ __html: event.html }} />
    </Layout>
  )
}

EventPage.propTypes = {
  data: PropTypes.any,
}

export default EventPage

export const pageQuery = graphql`
  query EventsBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
