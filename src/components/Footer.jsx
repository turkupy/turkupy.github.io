import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { colors } from "../utils/styles"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin: 5rem 0 5rem 0;

  a.button {
    background: ${colors.darkPink};
  }

  a.button:hover {
    background: ${colors.lightPink};
  }
`

const Footer = ({ path }) => (
  <StyledFooter>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <a href="https://github.com/turkupy/turkupy.github.io">Github</a>
      <a href="https://twitter.com/turku_py">Twitter</a>
    </div>
    <div
      style={{
        display: path === "/feature/" ? "none" : "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "3rem",
      }}
    >
      <Link
        className="button"
        to="/feature"
        style={{
          padding: "0.25rem 1rem",
          borderRadius: "2rem",
          color: colors.white,
        }}
      >
        Request a feature
      </Link>
    </div>
  </StyledFooter>
)

Footer.propTypes = {
  path: PropTypes.string,
}

export default Footer
