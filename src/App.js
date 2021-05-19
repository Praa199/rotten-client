import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import * as PATHS from "./utils/paths";
import MoviesPage from "./pages/MoviesPage";
import Navbar from "./pages/Navbar.jsx";
import AddMoviePage from "./pages/AddMoviePage.jsx";
import SingleMoviePage from "./pages/SingleMoviePage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={PATHS.HOME_PAGE} component={HomePage} />
        {/* <Route exact path={PATHS.} component={LoginPage} /> */}
        {/* <Route exact path={PATHS.} component={SignupPage} /> */}
        {/* <Route exact path={PATHS.} component={ProfilePage} /> */}
        <Route exact path={PATHS.MOVIES_PAGE} component={MoviesPage} />
        <Route exact path={PATHS.ADD_MOVIES} component={AddMoviePage} />
        <Route exact path={PATHS.SINGLE_MOVIE} component={SingleMoviePage} />
        {/* <Route exact path={PATHS.} component={EditSinglePage} /> */}
        {/* <Route exact path={PATHS.} component={UserPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
