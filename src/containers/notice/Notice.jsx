import React from "react";

import { Navbar, ScrollToTop, ScrollUp } from '../../components';
import { Footer } from '../../containers';

import './notice.css';
  
const Notice = () => {
  return (
    <div className="Notice"> 
        {/* <div className="gradient__bg"> */}
          <Navbar />
          <ScrollUp />
          <ScrollToTop />
          <div className="notice__content section__padding">
            <h1>Angaben gemäß § 5 TMG</h1>
            <p>Brandes Consulting GmbH <br/> Sundernstraße 41E <br/>  31224 Peine <br/> <br/> Handelsregister: HRB 207084 <br/> Registergericht: Amtsgericht Hildesheim <br/> <br/> Vertreten durch: <br/> Carsten Brandes </p>
            <h1>Kontakt</h1>
            <p>Telefon: +49 (0) 5171 540 6059 <br/> Telefax: 49 (0) 5171 540 3624 <br/> E-Mail: cb@brandes-consulting-gmbh.de </p>
            <h1>Umsatzsteuer-ID</h1>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br/> DE 340380898 </p>
            <h1>EU-Streitschlichtung</h1>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>. <br/> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <h1>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h1>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        {/* </div> */}
      <Footer />
    </div>
  );
};
  
export default Notice;