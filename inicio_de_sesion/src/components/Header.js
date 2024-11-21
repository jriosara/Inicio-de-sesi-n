
import React from "react";
import "../styles/Header.css";
import Q360 from '../asset/image/Q360.png';

function Header() {
  return (
    <header>
      <div className="img">
        <a href="index.html">
          <img src="../asset/image/Q360.png" alt="Quorum360" />
        </a>
      </div>
      <nav className="header_nav">
        <ul className="nav_list">
          <a className="item" href="inicio_secion.html">Administrador</a>
          <a className="item" href="inicio_secion.html">Residente</a>
          <a className="item" href="#">Comunidad</a>
          <a className="item" href="#">Servicios</a>
          <a className="item" href="#">Soporte</a>
          <a className="item" href="#">Contacto</a>
        </ul>
      </nav>
      <div className="header_auth">
        <a href="inicio_secion.html" className="sign_in">Iniciar Sesión</a>
        <a href="#" className="registre">Registrarse</a>
      </div>
    </header>
  );
}

export default Header;
