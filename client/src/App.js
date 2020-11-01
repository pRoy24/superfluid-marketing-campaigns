import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/Landing';
import MarketerHome from './components/marketer/MarketerHome';
import PublisherHome from './components/publisher/PublisherHome';
import AppHomeContainer from './components/home/AppHomeContainer';
import BottomNavBar from './components/nav/BottomNavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
     <Router>
      <div className="App">
          <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/app">
            <AppHomeContainer/>
          </Route>
          </Switch>
      </div>
      <BottomNavBar/>
    </Router>
  );
}

export default App;
