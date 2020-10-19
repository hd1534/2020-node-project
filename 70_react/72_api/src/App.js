/** @format */

import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import MusicList from "./MusicList";
import MovieList from "./MovieList";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <Route path='/' component={Navigation} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/music' component={MusicList} />
        <Route path='/movie' component={MovieList} />
        <Route path='/about' component={About} />
        <Route path='/'>
          <h3>404 Not Found</h3>
        </Route>
      </Switch>
    </>
  );
}

export default App;
