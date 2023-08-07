import React from 'react';
import header from '../../assets/ai4.png';
import './header.css';

const Header = () => (
  <div className="bc__header section__margin" id="home">
    <div className="bc__header-content">
      <h1>Breakout.</h1> <h2>Disrupt.</h2> <h3>Develop.</h3> <h4>Scale.</h4>
      <p>Erfahrung ist der Blick in die Vergangenheit. Zukunft real werden zu lassen, geht über Erfahrung weit hinaus.</p>

    </div>

    <div className="bc__header-image">
      <img src={header} alt="Ideenbild" />
    </div>
  </div>
);

export default Header;

/*       <p>Der Zweck – besser noch der Sinn – eines Unternehmens ist die Basis allen Handelns. Ergänzend kann zur Ausrichtung eine Vision und Mission hilfreich sein.</p>
      <p>Die passend entwickelte, nachhaltige Strategie ist regelmäßiger Erneuerung unterworfen und die Unternehmensprozesse letztlich nur eine Konsequenz.</p>
      <p>Eine erwartete Kultur wird exakt angepasst – als Folge des Sinns und der Strategie – auch um ein gemeinsames Verständnis zum erwarteten Verhalten zu schaffen.</p>
      <p>Auf diese Eckpfeiler abgestimmt, folgt die Art des Führens, nicht losgelöst – sondern um den abgeleiteten Weg zu beschreiten und die Ziele zu erreichen.</p>
      <p>Einer tiefen Verankerung im Unternehmen folgt das gemeinsame Handeln – in jedem Unternehmen anders – aber verpflichtend mit einer gemeinsamen Haltung aller.</p>*/