import React from "react"
import PropTypes from "prop-types"

const BarChart = ({ data }) => {
  console.log(data)
  return (
    <div>
      <svg id="chart" />
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.any,
}

export default BarChart
