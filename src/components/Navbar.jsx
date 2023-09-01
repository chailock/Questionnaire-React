import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="Questionnaire">Questionnaire</Link>
          </li>
          <li>
            <Link to="Create">Create</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
