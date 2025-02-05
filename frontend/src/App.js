import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; // Asegúrate de tener el logo en la carpeta assets
import raceImage from "./assets/race.jpg"; // Imagen de la carrera

function App() {
  return (
    <div className="container">
      {/* Logo */}
      <header className="header">
        <img src={logo} alt="Helios Race UPV Logo" className="logo" />
      </header>

      {/* Título */}
      <h1 className="title">Helios Race UPV</h1>

      {/* Línea divisoria */}
      <hr className="divider" />

      {/* Descripción */}
      <p className="description">
        En Helios Race UPV apostamos por una visión de futuro e innovación en el
        campo de la movilidad. Nuestro objetivo es construir un coche alimentado
        única y exclusivamente por la irradiancia solar para competir contra
        otras universidades en las distintas carreras que hay por todo el mundo.
        Esta gran competencia entre equipos lleva a que se investigue e invierta
        cada vez más en este campo, asegurando un futuro prometedor para el
        sector energético solar y automovilístico. Nuestra visión es ser el
        primer equipo español que participa en las grandes carreras
        internacionales de coches solares y así convertirnos en el equipo
        referente español.
      </p>

      {/* Imagen de la carrera */}
      <img src={raceImage} alt="Carrera de coches solares" className="race-image" />
    </div>
  );
}

export default App;
