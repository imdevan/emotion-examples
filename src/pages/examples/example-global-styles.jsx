import React from 'react'
import { Global, css } from '@emotion/core'

/**
 * Global styles (only while component is mounted)...
 * usually this would go in your app or layout file that your pages inherit from 
 */
function E3 () {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            background-color: pink;
          }
        `}
      />
  
      <p>EXAMPLE 3!</p>
    </React.Fragment>
  );
} 

export default E3