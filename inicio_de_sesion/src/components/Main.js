
import React from "react";
import "../styles/Main.css";

function Main() {
  return (
    <main>
      <section>
        <div className="login">
          <div className="form-container">
            <div className="container">
              <h2>Inicio de Sesión</h2>
            </div>
            <form className="form" method="POST">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" name="email" placeholder="ejemplo@pip.com" className="input" required />
              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" id="contrasena" name="contrasena" placeholder="xxxxxxxx" className="input" required />
              <label htmlFor="opcion">Seleccione</label>
              <select id="opcion" name="opcion" className="input" required>
                <option value="">Seleccione</option>
                <option value="admin">Administrador</option>
                <option value="residente">Residente</option>
              </select>
              <input type="submit" value="Iniciar sesión" className="primary-button login-button" />
              <a href="/">Recuperar contraseña</a>
            </form>
            <button className="secondary-button signup-button">Registrarse</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
