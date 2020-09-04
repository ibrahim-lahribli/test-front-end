import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Form } from "./pages/Form";
import { List } from "./pages/List";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
            <Link to="/list">List</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/list" component={List} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
