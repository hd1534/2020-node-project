/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/music'>Music</Link>
        </li>
        <li>
          <Link to='/movie'>Movie</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <hr />
    </>
  );
}

export default Navigation;
