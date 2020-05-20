import React from "react"
import PropTypes from "prop-types"

const Bio = ({ name, github }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{github}</p>
    </div>
  )
}

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default Bio
