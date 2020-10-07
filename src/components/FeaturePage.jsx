import React from "react"
import PropTypes from "prop-types"
import { colors } from "../utils/styles"
import { getTranslation } from "../utils/translations/helpers"
import styled from "styled-components"

const StyledButton = styled.button`
  & {
    background: ${colors.darkPink};
  }

  &:hover {
    background: ${colors.lightPink};
  }
`

const FeaturePage = ({ langCode }) => {
  return (
    <>
      <h1 style={{ marginTop: 0 }}>
        {getTranslation(langCode, "frontpage.title")}
      </h1>
      <h2>Feature Request</h2>
      <form
        action="https://getform.io/f/3aaf3b02-a838-42b5-b90a-282e22b82aa3" // Getform handler
        method="POST"
        style={{ margin: 0 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            justifyItems: "stretch",
            alignItems: "flex-start",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <label htmlFor="name">Name:</label>
          <input type="name" name="name" />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" style={{ resize: "vertical" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <StyledButton
            type="submit"
            style={{
              padding: "0.25rem 1rem",
              borderRadius: "4px",
              color: colors.white,
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            Send Request
          </StyledButton>
        </div>
      </form>
    </>
  )
}

FeaturePage.propTypes = {
  langCode: PropTypes.string,
}

export default FeaturePage
