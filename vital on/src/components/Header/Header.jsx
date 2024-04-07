// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Modal from './Modal';

const Header = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <header>
      <div className="logo-container">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li><a href="#">Registro</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
      <div className="button-container">
        <button onClick={handleOpenRegisterModal}>Registrarse</button>
      </div>
      {showRegisterModal && (
        <Modal onClose={handleCloseRegisterModal}>
          <h1>Formulario de Registro</h1>
          <form>
            <input type="text" name="nombre" placeholder="Nombre completo" />
            <input type="email" name="correo" placeholder="Correo electrónico" />
            <input type="password" name="contraseña" placeholder="Contraseña" />
            <button type="submit">Registrarse</button>
          </form>
        </Modal>
      )}
    </header>
  );
};

export default Header;
