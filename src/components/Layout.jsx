import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import logo from "../../content/assets/logo.png"
import { createGlobalStyle } from "styled-components"
import { colors } from "../utils/styles"
import { getTranslation } from "../utils/translations/helpers"

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

  button{
    margin:2rem;
    padding:1rem;
    background:${colors.white};
    border: dashed 6px ${colors.darkPink};
  } 

  button:hover{
    cursor:pointer;
    border:solid 6px ${colors.darkPink};
    border-radius:5px;
  }
  
  .skip-link{
  color:  ${colors.white};
  background: ${colors.darkPink};
  padding:1rem;
  position: absolute;
  transform: translateY(-100%);
  }

  .skip-link:focus{
    transform: translateY(0%);
  }

  .skip-link:hover{
    cursor:pointer;
    color:${colors.white};
  }

  nav{
    display:flex;
    justify-content:space-evenly;
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
  const [langCode, setLangCode] = useState("en")
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
          <a className="skip-link" href="#main">
            {getTranslation(langCode, "skip-link")}
          </a>
          <nav>
            <button
              aria-label="Change content to English"
              onClick={() => setLangCode("en")}
            >
              English
            </button>
            <button
              aria-label="Change content to Finnish"
              onClick={() => setLangCode("fi")}
            >
              Suomi
            </button>
            <button
              aria-label="Change content to Swedish"
              onClick={() => setLangCode("sv")}
            >
              Svenska
            </button>
          </nav>
        </header>
        <main id="main">{children}</main>
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
