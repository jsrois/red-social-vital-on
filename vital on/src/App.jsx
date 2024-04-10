// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import './Styles.css';

function App() {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleOpenModalRegister = () => setShowModalRegister(true);
  const handleCloseModalRegister = () => setShowModalRegister(false);

  const handleOpenModalLogin = () => setShowModalLogin(true);
  const handleCloseModalLogin = () => setShowModalLogin(false);

  return (
    <div className="App">
      <Header
        onOpenModalRegister={handleOpenModalRegister}
        onOpenModalLogin={handleOpenModalLogin}
      />
      {showModalRegister && (
        <Modal onClose={handleCloseModalRegister}>
          <h1>Formulario de Registro</h1>
          <form>
            <input type="text" name="nombre" placeholder="Nombre completo" />
            <input type="email" name="correo" placeholder="Correo electrónico" />
            <input type="password" name="contraseña" placeholder="Contraseña" />
            <button type="submit">Regístrate</button>
          </form>
        </Modal>
      )}
      {showModalLogin && (
        <Modal onClose={handleCloseModalLogin}>
          <h1>Formulario de Login</h1>
          <form>
            <input type="email" name="correo" placeholder="Correo electrónico" />
            <input type="password" name="contraseña" placeholder="Contraseña" />
            <button type="submit">Login</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

const registerButton = document.getElementById("register-button");
const loginButton = document.getElementById("login-button");

registerButton.addEventListener("click", () => {
  registerButton.classList.add("clicked");
  setTimeout(() => {
    registerButton.classList.remove("clicked");
  }, 300);
});

loginButton.addEventListener("click", () => {
  loginButton.classList.add("clicked");
  setTimeout(() => {
    loginButton.classList.remove("clicked");
  }, 300);
});
export default App;



