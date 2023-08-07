import React from "react";
import Feature from "../../components/feature/Feature";
import "./brand.css";

const Brand = () => (
  <div className="bc__brand section__margin" id="brand">
    <div className="bc__brand-feature">
      <Feature
        title="breakout, disrupt, develop and scale"
        text="Diese vier Phasen erfordern angepasste Instrumente für eine zukunftsorientierte Ausrichtung eines nachhaltigen Unternehmens – insbesondere auch in der Personalentwicklung."
      />
    </div>
    <div className="bc__brand-heading">
      <h1 className="gradient__text">
        Grundlage einer Zukunftsentwicklung ist die Strategie. <br /> Kultur,
        Prozesse und Personalentwicklung folgen dieser.{" "}
      </h1>
    </div>
    <div className="bc__brand-container">
      <Feature
        title="breakout"
        text="Substanz des Unternehmens sichern. Auswege finden und beschreiten."
      />
      <Feature
        title="disrupt"
        text="Ursachen für den Misserfolg beseitigen. Alte Prozesse und Produkte resolut transformieren."
      />
      <Feature
        title="develop"
        text="Geschäft stabilisieren. Neues entwickeln und aufbauen."
      />
      <Feature
        title="scale"
        text="Erfolgreiches übertragen. Im Wachstum nachhaltig agieren."
      />
    </div>
  </div>
);

export default Brand;
