import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import logo from "../../content/assets/logo.png"

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

const Layout = ({ location, title, children }) => {
  return (
    <StyledLayout>
      <header><Link to ="/"><img src={logo} alt="Turku.py" /></Link></header>
      <main>{children}</main>
      <Footer>

      </Footer>
    </StyledLayout>
  )
}

export default Layout
