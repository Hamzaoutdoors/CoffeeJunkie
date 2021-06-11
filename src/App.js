import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCoffee from "./pages/SingleCoffee";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/coffee:id" component={SingleCoffee}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
}

export default App;
