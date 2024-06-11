import React, { useState, useEffect, useRef } from "react";
import logo from "../icons/render.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="subnav1">Render</div>
      <div className="subnav3">
        <form>
          <input type="text" placeholder="Search.." name="search" className="search" />
          <button type="Search" className="navsearch-btn">
            Search
          </button>
        </form>
      </div>
      <div className="subnav3">
        <img className="logo" src={logo} alt="logo"/>
      </div>
    </nav>
  );
};

export default Navbar;
