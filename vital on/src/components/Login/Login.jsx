import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';

function Login({ onClose, visible }) {
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`Login ${visible ? 'visible' : ''}`}>
      <div className="Login-content">
        <div className="Login-header">
          <h1>LOGIN</h1>
        </div>
        <div className="Login-body">
          <form>
            <input type="text" name="usuario" placeholder="Usuario" />
            <input type="password" name="contraseña" placeholder="Contraseña" />
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div className="Modal-footer">
          <button onClick={handleClose}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h1>Formulario de Login</h1>
        <form>
          <input type="email" name="correo" placeholder="Correo electrónico" />
          <input type="password" name="contraseña" placeholder="Contraseña" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export { Login, Modal };