import React from "react";
import Feature from "../../components/feature/Feature";
import module from "../../assets/module.jpg";

import "./offering.css";

const offeringData = [
  {
    title:
      "Unternehmensstrategie und die strategische Ausrichtung von Geschäftsbereichen.",
    text: "Lang- und mittelfristige Strategien sind unabdingbar für eine nachhaltige Unternehmensentwicklung und die Auswahl, Entwicklung und Bindung von Fach- und Führungskräften.",
  },
  {
    title: "Digitale Transformation und Prozessoptimierung.",
    text: "Digitalisierung ohne vorherige Überprüfung und Optimierung vernichtet Ressourcen, frustriert die beteiligten Menschen und erzeugt damit eher Leistungsverluste.",
  },
  {
    title: "Unternehmenskultur und Führungsverhalten.",
    text: "Führungskräfte handeln als Vorbild – ohne Empathie kein Erfolg. Die „common attitude“ aller Führungskräfte muss entwickelt sein und sich regelmäßiger Überprüfung unterziehen lassen.",
  },
  {
    title: "Personalentwicklung und Kompetenzen für Experten.",
    text: "Mit einem Vorlauf von zwei bis drei Jahren sind definierte Kompetenzen und Fähigkeiten zur Erledigung der Arbeitsaufgabe die Grundlage für eine zukunftsorientierte Personalentwicklung.",
  },
  {
    title: "Expertise im Unternehmen und Weiterbildung.",
    text: "Ohne Expertise keine Innovation. Es gilt, diese mit einem Vorlauf von eher drei bis sieben Jahren vorzubereiten und mit den Innovationsprozessen eng zu verbinden.",
  },
  {
    title: "Berufsausbildung und Aufbau von Fachkräften.",
    text: "Expertise direkt oder auch Fachkräfte ausschließlich vom Markt einzukaufen, reicht nur zum Schließen von kurzfristig entstandenen Lücken. Ein passender, für das Unternehmen organisierter Aufbau von Fachlichkeit stabilisiert die Unternehmensentwicklung.",
  },
  {
    title: "Praxisberatung für Führungskräfte und Interimsmanagement.",
    text: "Eingefahrene Wege und Handlungsweisen zu überprüfen oder auch ganz zu verlassen hilft – immer. Dabei ist die Dauer der Ausübung der Führungsaufgabe nicht relevant.",
  },
];

const Offering = () => (
  <div className="bc__offering section__padding" id="angebot">
    <div className="bc__offering-heading">
      <h1 className="gradient__text">
        Moderne Personalentwicklung ist heute ein strategischer Ansatz und hat
        mit der bisherigen Personalarbeit nur noch sehr wenig zu tun. <br />{" "}
        <br /> Eine „data-driven“, hoch digitalisierte Personaladministration
        ist Voraussetzung und unterstützt die Gewinnung, Entwicklung und Bindung
        des für eine zukunftsorientierte Geschäftsentwicklung notwendigen
        Personals.
      </h1>
      <div className="bc__offering-image">
        <img src={module} alt="Bild Module" />
      </div>
      <p>
        Unser Angebot im Überblick. <br /> Aus unserer modularen Toolbox wählen
        wir je nach Phase und Problemstellung die passende Vorgehensweise in
        Abstimmung mit Ihnen aus.{" "}
      </p>
    </div>
    <div className="bc__offering-container">
      {offeringData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Offering;
