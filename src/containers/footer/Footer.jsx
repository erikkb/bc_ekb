import React from 'react';
import bcLogo from '../../assets/logotest.png';

import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => (
  <div className="bc__footer section__padding">
    <div className="bc__footer-heading">
      <h1 className="gradient__text">Gemeinsam Ziele erreichen</h1>
    </div>
    <div className="bc__footer-links">
      <div className="bc__footer-links_logo">
        <img src={bcLogo} alt="bc_logo" />
        <p>Vertreten durch: <br /> Carsten Brandes <br/> Sunderstraße 41E<br/>31224 Peine</p>
      </div>
      <div className="bc__footer-links_div">
        <h4>Kontakt</h4>
        <a href = "mailto: cb@brandes-consulting-gmbh.de"><p>E-Mail: cb@brandes-consulting-gmbh.de</p></a>
        <a href="tel:+4951715406059"><p>Tel.: +49 (0) 5171 540 6059</p></a>
        <a href="tel:+49051715403624"><p>Fax: +49 (0) 5171 540 3624</p></a>
      </div>
      <div className="bc__footer-links_div">
        <h4>Rechtliches</h4>
        {/*<nav><Link to="/cookie-richtlinie"><p>Cookie-Richtlinie</p></Link></nav>*/}
        <nav><Link to="/datenschutzerklaerung"><p>Datenschutzerklärung</p></Link></nav>
        <nav><Link to="/impressum"><p>Impressum</p></Link></nav>
      </div>
    </div>
  </div>
);

export default Footer;
