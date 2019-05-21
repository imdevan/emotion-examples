import React from 'react'
import styled from '@emotion/styled'

const Container = styled.main`
  max-width: 900px;
  width: 80%;
  margin: auto;
  padding-top: 2rem;
`;

const H1 = styled.h1`
  color: blue;
  &:hover {
    color: geen;
  }
`

/**
 * Styling with emotion
 * Example 3: using @emotion/styled
 */
function E3 () {
  return (
    <React.Fragment>
      <Container>
        <H1>EXAMPLE 3!</H1>
      </Container>
    </React.Fragment>
  );
} 

export default E3