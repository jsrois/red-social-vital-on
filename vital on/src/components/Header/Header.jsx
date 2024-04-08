// eslint-disable-next-line no-unused-vars
import React from 'react';
import Modal from '../Modal';
import '../../../Styles.css';

// eslint-disable-next-line react/prop-types
const Header = ({ onOpenModal }) => {
  
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
        <button onClick={onOpenModal}>Registrarse</button>
      </div>
      {showRegisterModal && (
        // eslint-disable-next-line no-undef
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
