import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'

/**
 * Styling with emotion
 * Example 4: Object styles
 * 
 * Object styles can be used in emotion without declaring the css prop
 * Still enables hover states and media queries
 */

function E4 () {
  const containerStyle = {maxWidth: 900, width: '80%', margin: 'auto', paddingTop: '2rem'}
  const textStyle = {
    color: 'blue',
    '&:hover': {
      color: 'lightGreen'
    }
  }

  return (
    <React.Fragment>
      <main css={containerStyle} className='extra-non-emotion-class'>
        <h1 css={textStyle}>EXAMPLE 5!</h1>
      </main>
    </React.Fragment>
  );
} 

export default E4