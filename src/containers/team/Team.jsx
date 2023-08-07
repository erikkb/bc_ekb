import React from "react";
import team from "../../assets/cb.jpg";
import linkedin from "../../assets/linkedinsmall.png";
//import xing from '../../assets/xinglogo.png';

import "./team.css";

const Team = () => (
  <div className="bc__team section__padding" id="ueber">
    <div className="bc__team-content">
      <h1 className="gradient__text">Brandes Consulting GmbH</h1>
      <p>
        Das Unternehmen wurde 2020 von Carsten Brandes gegründet, der über 30
        Jahre Berufserfahrung aus der Industrie mitbringt - davon über 20 Jahre
        in verschiedenen, teilweise internationalen Führungs- und
        Managementpositionen mit Themenschwerpunkten in den Bereichen
        Restrukturierungen, Personalentwicklung und Prozessoptimierung. <br />
        <br /> In unserem Netzwerk arbeiten wir ausschließlich mit Partnerinnen
        und Partnern zusammen, die ebenfalls eine mehrjährige Berufserfahrung in
        mindestens zwei Unternehmen haben und damit über einen hohen
        Praxishintergrund - gerade auch aus Zukunftsprojekten - verfügen.
      </p>
    </div>
    <div className="bc__team-container">
      <div className="bc__team-image">
        <img src={team} alt="Bild Carsten Brandes" />
      </div>
      <div className="bc__team-buttons">
        <a
          href="https://de.linkedin.com/in/carsten-brandes-a3796a1b6"
          target="_blank"
          rel="noopener noreferrer"
          className="bc__team-button"
        >
          <img src={linkedin} alt="Linkedin Logo" />
        </a>
        {/*<a href='https://de.linkedin.com/in/carsten-brandes-a3796a1b6' className='bc__team-button'><img src={xing} alt="Xing Logo" /></a>*/}
      </div>
    </div>
  </div>
);

export default Team;
