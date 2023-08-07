import React from "react";

import { Brand, Navbar, ScrollToTop } from '../../components';
import { Footer, Header, Offering, Team } from '../../containers';

import './home.css';
  
const Home = () => {
  return (
    <div className="Home"> 
        {/* <div className="gradient__bg"> */}
          <Navbar />
          <Header />
        {/* </div> */}
        <ScrollToTop />
        <Brand />
        <Offering />
        <Team />
        <Footer />
    </div>
  );
};
  
export default Home;