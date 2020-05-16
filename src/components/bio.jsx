import React from "react"

const Bio = ({ name, github }) => {
  return <div>
    <p>{name}</p>
    <p>{github}</p>
  </div>
}

export default Bio