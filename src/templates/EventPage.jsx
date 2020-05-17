import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { colors } from "../utils/styles"
import Seo from "../components/Seo"

const EventPage = ({ data, location }) => {
  const event = data.markdownRemark


const EventTitle = styled.h1`
  margin-bottom: .4em;
`

const EventDetail = styled.p`
  color: ${colors.darkGrey};
  padding-bottom: 1.4em;
`

return <Layout>
  <Seo title={data.markdownRemark.frontmatter.title} />
  <EventTitle>{data.markdownRemark.frontmatter.title}</EventTitle>
  <EventDetail>{data.markdownRemark.frontmatter.date} @ {data.markdownRemark.frontmatter.host}</EventDetail>

  <section dangerouslySetInnerHTML={{__html: event.html}} />
  </Layout>
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