import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getTranslation } from "../utils/translations/helpers"

/* Uses the Switcher-pattern from https://every-layout.dev/ */
const Switcher = styled.div`
  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc((0.5rem / 2) * -1);
  }

  & > * > * {
    text-align: center;
    flex-grow: 1;
    flex-basis: calc((20rem - (100% - 0.5rem)) * 999);
    margin: calc(0.5rem / 2);
  }

  & > * > :nth-last-child(n + 5),
  & > * > :nth-last-child(n + 5) ~ * {
    flex-basis: 100%;
  }
`

const StyledFooter = styled.footer`
  margin: 5rem 0 5rem 0;
`

const Footer = ({ langCode }) => (
  <Switcher>
    <StyledFooter>
      <a href="https://github.com/turkupy/turkupy.github.io">Github</a>
      <a href="https://meetabit.com/communities/turku-py">Meetabit</a>
      <a href="https://twitter.com/turku_py">Twitter</a>
      <a href="https://github.com/turkupy/turkupy.github.io/issues/new?assignees=&labels=&template=feature_request.md&title=">
        {getTranslation(langCode, "footer.request-feature")}
      </a>
    </StyledFooter>
  </Switcher>
)

Footer.propTypes = {
  langCode: PropTypes.string,
}

export default Footer
