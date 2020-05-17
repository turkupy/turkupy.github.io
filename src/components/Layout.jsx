import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../content/assets/logo.png"
import { createGlobalStyle } from "styled-components"
import { colors } from '../utils/styles'

const GlobalStyles = createGlobalStyle`
  color: ${colors.darkGrey};

  h1, h2 {
    color: ${colors.darkGrey};
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
    & > * {width: 90%;}
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
      <header><Link to ="/"><img src={logo} alt="Turku.py - programming community for women and nonbinaries" /></Link></header>
      <main>{children}</main>
      <Footer>

      </Footer>
    </StyledLayout>
    </>
  )
}

export default Layout
