import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import logo from "../../content/assets/logo.png"
import { createGlobalStyle } from "styled-components"
import { colors, borderRadius } from "../utils/styles"
import { getTranslation } from "../utils/translations/helpers"
import Footer from "./Footer"

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

  a {
    color: ${colors.darkPink};
  }

  a:hover {
    color: ${colors.darkGrey}
  }

`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkipLink = styled.a`
  color: ${colors.white};
  background: ${colors.lightPink};
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transform: translateY(-130%);
  font-weight: bold;
  border-radius: ${borderRadius.small};
  &:focus {
    transform: translateY(0%);
    outline: none;
    box-shadow: 0 0 0 0.4em ${colors.darkPink};
  }
  &:hover {
    cursor: pointer;
    color: ${colors.white};
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

const Layout = ({ children, langCode }) => {
  const linkToIndex = langCode === "en" ? "/" : `/${langCode}`

  return (
    <>
      <GlobalStyles />
      <StyledLayout>
        <Header>
          <SkipLink href="#main">
            {getTranslation(langCode, "header.skiplink")}
          </SkipLink>
          <Link to={linkToIndex}>
            <img
              src={logo}
              alt="Turku.py - programming community for women and nonbinaries"
            />
          </Link>
        </Header>
        <main id="main">{children}</main>
        <Footer langCode={langCode} />
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  langCode: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default Layout
