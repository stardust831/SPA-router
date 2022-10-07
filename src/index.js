import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./pages/About";
import Root from "./pages/Root";

import { BrowserRouter as Router, Route} from 'react-router-dom';

const container = document.getElementById('root');
ReactDOM.createRoot(container).render(
  <Router>
    <Route exact path="/SPA-router">
      <Root />
    </Route>
    <Route path="/SPA-router/about">
      <About />
    </Route>
  </Router>
);