import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './components';
import { Notice, Privacy } from './containers';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />}></Route>
          {/*<Route path="cookie-richtlinie" element={<Cookies />} />*/}
          <Route path="datenschutzerklaerung" element={<Privacy />} />
          <Route path="impressum" element={<Notice />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
