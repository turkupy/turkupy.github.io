import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import logo from "../../content/assets/logo.png"
import { createGlobalStyle } from "styled-components"
import { colors } from "../utils/styles"

const GlobalStyles = createGlobalStyle`
  body { 
    color: ${colors.darkGrey};
    font-size: calc(1rem + 0.5vw);
  }
  h1 {
    font-size: calc(2rem + 0.5vw);
    color: ${colors.darkGrey};
  }
  
 h2,h3 {
    color: ${colors.darkGrey};
    font-size: calc(1.25rem + 0.5vw);
  }
`

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 50rem;
  }

  @media (max-width: 768px) {
    & > * {
      width: 90%;
    }
  }
`

const Footer = styled.footer`
  margin: 5rem 0 5rem 0;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <header>
          <Link to="/">
            <img
              src={logo}
              alt="Turku.py - programming community for women and nonbinaries"
            />
          </Link>
        </header>
        <main>{children}</main>
        <Footer></Footer>
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default Layout
