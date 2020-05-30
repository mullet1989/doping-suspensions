import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Main from "./routes/Main";
import Disclaimer from "./routes/Disclaimer";
import Contact from "./routes/Contact";

function App() {


  return (
    <div className="App">
      <Router>
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="column" style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/" style={{ padding: "0.5em" }}>Home</Link>
              <Link to="/disclaimer" style={{ padding: "0.5em" }}>Legal</Link>
              <Link to="/contact" style={{ padding: "0.5em" }}>Contact</Link>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <img src="/logo-large.png" />
            </div>
          </div>


          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;