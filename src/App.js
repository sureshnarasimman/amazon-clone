import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home  from './components/Home';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path='/checkout'>
        <Header />
          <h1>Checkout</h1></Route>
        <Route path='/login'><h1>Login</h1></Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
