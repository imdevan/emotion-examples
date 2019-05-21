import React from 'react'
import { Global, css } from '@emotion/core'

function E1 () {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            background-color: papayaWhip;
          }
        `}
      />
  
      <p>EXAMPLE 1!</p>
    </React.Fragment>
  );
} 

export default E1