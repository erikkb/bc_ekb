import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logotest.png";

import { Link } from 'react-router-dom';

import './navbar.css';

const Menu = () => (
  <>
  {/* <Link to="/"><p>Home</p></Link> */}
  <p><a href="#brand">Unser Ansatz</a></p>
  <p><a href="#angebot">Unser Angebot</a></p>
  <p><a href="#ueber">Über uns</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bc__navbar">
      <div className="bc__navbar-links">
        <div className="bc__navbar-links_logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <div className="bc__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="bc__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#2b3d50" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#2b3d50" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="bc__navbar-menu_container scale-up-center">
          <div className="bc__navbar-menu_container-links">
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;