const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create index pages

  const langCodes = ["en", "fi", "sv"]
  const indexPage = path.resolve("./src/templates/IndexPage.jsx")

  langCodes.forEach(code => {
    const path = code == "en" ? "/" : `/${code}`

    createPage({
      path,
      component: indexPage,
      context: {
        langCode: code,
      },
    })
  })

  // Create event detail pages
  const eventPage = path.resolve("./src/templates/EventPage.jsx")
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const events = result.data.allMarkdownRemark.edges

  events.forEach(event => {
    createPage({
      path: event.node.fields.slug,
      component: eventPage,
      context: {
        slug: event.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}
