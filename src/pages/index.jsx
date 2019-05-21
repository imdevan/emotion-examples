import React from 'react'
import { Global, css } from '@emotion/core'

function Page () {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            background-color: papayaWhip;
          }
        `}
      />
  
      <p>Index page!</p>
    </React.Fragment>
  );
} 

export default Page