import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { colors } from "../utils/styles"

const EventPage = ({ data, location }) => {
  const event = data.markdownRemark


const EventTitle = styled.h2`
  margin-bottom: .4em;
`

const EventDetail = styled.p`
  color: ${colors.grey};
  padding-bottom: 1.4em;
`

return <Layout>
  <EventTitle>{data.markdownRemark.frontmatter.title}</EventTitle>
  <EventDetail>{data.markdownRemark.frontmatter.date} @ {data.markdownRemark.frontmatter.host}</EventDetail>

  <section dangerouslySetInnerHTML={{__html: event.html}} />
  </Layout>
}

export default EventPage


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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