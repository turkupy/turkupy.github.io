import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FeaturePage from "../components/FeaturePage"

const Feature = ({ path, data }) => {
  const langCode = "en"
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} path={path}>
      <SEO title={siteTitle} />
      <FeaturePage langCode={langCode} />
    </Layout>
  )
}

Feature.propTypes = {
  path: PropTypes.path,
  data: PropTypes.any,
}

export default Feature

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
