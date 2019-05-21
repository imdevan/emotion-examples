import React from 'react'
import { Global, css } from '@emotion/core'

function E2 () {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            background-color: pink;
          }
        `}
      />
  
      <p>EXAMPLE 2!</p>
    </React.Fragment>
  );
} 

export default E2