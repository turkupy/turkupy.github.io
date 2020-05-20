import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Event from "../components/Event"
//import Bio from "../components/Bio"
import styled from "styled-components"
import { colors } from "../utils/styles"

const EventContainer = styled.ul`
  margin: 0 auto;
  list-style-type: none;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 1em;
  row-gap: 1em;
  @media (max-width: 650px) {
    grid-template-columns: 100%;
  }
`
/*
const OrganizerContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 1em;
  row-gap: 1em;
  @media (max-width: 650px) {
    grid-template-columns: 100%;
  }
`
*/
const PlainText = styled.p`
  color: ${colors.darkGrey};
`

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const events = data.events.edges
  // const organizers = data.organizers.edges

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>Turku.py</h1>
      <h2>We are a computer science community</h2>
      <PlainText>
        Turku.py is a programming community for women and non-binaries in Turku,
        Finland. We organize meetups, workshops and afterworks that aim to
        support the local tech culture, share skills and knowlegde and inspire
        people from minority groups in the fields of programming, devops and
        data science.
      </PlainText>
      <h2>Past events</h2>
      <EventContainer>
        {events.map(event => (
          <li key={event.node.frontmatter.title}>
            <Event
              title={event.node.frontmatter.title}
              date={event.node.frontmatter.date}
              host={event.node.frontmatter.host}
              slug={event.node.fields.slug}
            />
          </li>
        ))}
      </EventContainer>
      {/* TODO implement this */}
      {/* <OrganizerContainer>
        {organizers.map(organizer => <Bio
          key={organizer.node.frontmatter.github}
          name={organizer.node.frontmatter.name}
          github={organizer.node.frontmatter.github}
        />)}
      </OrganizerContainer> */}
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
      filter: { frontmatter: { type: { eq: "event" } } }
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
