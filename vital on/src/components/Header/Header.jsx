import React, { useState } from 'react';
import Modal from '../src/components/Modal';
import Login from '../src/components/Login';

const Header = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleOpenModalRegister = () => {
    // código para abrir el modal de registro
  };

  const handleOpenModalLogin = () => setShowModalLogin(true);

  const handleCloseModalLogin = () => setShowModalLogin(false);

  return (
    <header>
      <div className="logo-container">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li><a href="#">Regístrate</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div className="button-container" style={{ marginLeft: '20px' }}>
        <button onClick={handleOpenModalRegister}>Regístrate</button>
        <button onClick={handleOpenModalLogin}>Login</button>
      </div>
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
    </header>
  );
};

export default Header;