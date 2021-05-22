import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths.js";

function Navbar() {
  return (
    <div>
      <div>
        <Link to={PATHS.SIGNUP_PAGE}>signup</Link>
      </div>
      <div>
        <Link to={PATHS.HOME_PAGE}>hOME</Link>
      </div>
      <div>
        <Link to={PATHS.MOVIES_PAGE}>mOVIES</Link>
      </div>
    </div>
  );
}

export default Navbar;
