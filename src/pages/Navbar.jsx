import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths.js";

function Navbar() {
  return (
    <div>
      <Link to={PATHS.HOME_PAGE}>hOME</Link>
      <Link to={PATHS.MOVIES_PAGE}>mOVIES</Link>
    </div>
  );
}

export default Navbar;
