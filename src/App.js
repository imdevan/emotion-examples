import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Index from './pages'
import E1 from './pages/examples/example-1'
import E2 from './pages/examples/example-2'
import E3 from './pages/examples/example-3'
import E4 from './pages/examples/example-4'
import E5 from './pages/examples/example-5'

function App() {
  return (
    <BrowserRouter>
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
          <li>
            <Link to='/example-3/'>example 3</Link>
          </li>
          <li>
            <Link to='/example-4/'>example 4</Link>
          </li>
          <li>
            <Link to='/example-5/'>example 5</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/example-1" exact component={E1} />
      <Route path="/example-2" exact component={E2} />
      <Route path="/example-3" exact component={E3} />
      <Route path="/example-4" exact component={E4} />
      <Route path="/example-5" exact component={E5} />
    </BrowserRouter>
  );
}

export default App;
