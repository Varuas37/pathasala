import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './page/landing/Landing';
import Navbar from './page/landing/Navbar';
// import history from './utils/history';


function App() {
  return (
    <section>
      <Router >
        <Navbar/>
        <Switch>

          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </section>

  );
}

export default App;
