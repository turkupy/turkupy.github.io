import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getTranslation } from "../utils/translations/helpers"

const StyledFooter = styled.footer`
  margin: 5rem 0 5rem 0;
  display: flex;
  flex-direction row;
  justify-content: space-evenly;
`

const Footer = ({ langCode }) => (
  <StyledFooter>
    <a href="https://github.com/turkupy/turkupy.github.io">Github</a>
    <a href="https://meetabit.com/communities/turku-py">Meetabit</a>
    <a href="https://twitter.com/turku_py">Twitter</a>
    <a href="https://github.com/turkupy/turkupy.github.io/issues/new?assignees=&labels=&template=feature_request.md&title=">
      {getTranslation(langCode, "footer.request-feature")}
    </a>
  </StyledFooter>
)

Footer.propTypes = {
  langCode: PropTypes.string,
}

export default Footer
