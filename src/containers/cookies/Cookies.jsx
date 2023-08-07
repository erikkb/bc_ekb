import React from "react";

import { Navbar, ScrollToTop, ScrollUp } from '../../components';
import { Footer } from '../../containers';

import './cookies.css';
  
const Cookies = () => {
  return (
    <div className="Cookies"> 
        <div className="gradient__bg">
          <Navbar />
        </div>
        <ScrollUp />
        <ScrollToTop />
        Cookie-Richtlinie
        <Footer />
    </div>
  );
};
  
export default Cookies;