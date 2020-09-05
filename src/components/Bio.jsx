import React from "react"
import PropTypes from "prop-types"

const Bio = ({ name, github }) => (
  <article>
    <p>{name}</p>
    <p>{github}</p>
  </article>
)

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default Bio
