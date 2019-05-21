import React from 'react';
import { Link } from 'react-router-dom'
import Router from './components/Router'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/example-1/'>example 1</Link>
          </li>
          <li>
            <Link to='/example-2/'>example 2</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default App;
