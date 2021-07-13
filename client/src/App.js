import React from "react";
import NavMenu from "./components/Navbar";
import BookSearch from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={BookSearch} />
      </Switch>
    </Router>
  );
}

export default App;
