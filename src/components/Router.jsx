import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Index from '../pages'
import E1 from '../pages/examples/example-1'
import E2 from '../pages/examples/example-2'
import E3 from '../pages/examples/example-3'

function Router({children}) {
  return (
    <BrowserRouter>
      {children}

      <Route path="/" exact component={Index} />
      <Route path="/example-1" exact component={E1} />
      <Route path="/example-2" exact component={E2} />
      <Route path="/example-3" exact component={E3} />
    </BrowserRouter>
  );
}

export default Router;
