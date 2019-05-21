import React from 'react'

/**
 * Css inline styles example
 * This is the traditional way of styling react apps
 */
function E1 () {
  const containerStyle = {maxWidth: 900, width: '80%', margin: 'auto', paddingTop: '2rem'}
  const textStyle = {color: 'blue'}

  return (
    <React.Fragment>
      <main style={containerStyle}>
        <h1 style={textStyle}>EXAMPLE 1!</h1>
      </main>
    </React.Fragment>
  );
} 

export default E1