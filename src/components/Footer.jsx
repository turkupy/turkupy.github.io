import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin: 5rem 0 5rem 0;
  display: flex;
  flex-direction row;
  justify-content: space-evenly;
`

const Footer = () => (
  <StyledFooter>
    <a href="https://github.com/turkupy/turkupy.github.io">Github</a>
    <a href="https://twitter.com/turku_py">Twitter</a>
  </StyledFooter>
)

export default Footer
