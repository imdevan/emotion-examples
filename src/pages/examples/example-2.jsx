import React from 'react'
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {theme} from '../../siteConfig'

/**
 * Styling with emotion
 * Example 2: using @emotion/core css prop
 */
function E2 () {
  return (
    <React.Fragment>
      <main css={css`
        max-width: 900px;
        width: 80%;
        margin: auto;
        padding-top: 2rem;
      `}>
        <h1 css={css`
          color: blue;
          cursor: pointer;
          &:hover {
            color: ${theme.hoverColor};
          }
        `}>EXAMPLE 2!</h1>
      </main>
    </React.Fragment>
  );
} 

export default E2