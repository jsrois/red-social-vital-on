/*
import React, { useState } from 'react';

const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const LoginModal = ({ onClose }) => {
    const [visible, setVisible] = useState(false); // State for LoginModal visibility

    const handleClose = () => {
      setVisible(false);
      onClose(); 
    };

    return (
      <div className={`Modal ${visible ? 'visible' : ''}`}>
        <div className="Modal-content">
          <div className="Modal-header">
            <h1>Formulario de Registro</h1>
          </div>
          <div className="Modal-body">
            <form>
              <input type="text" />
            </form>
          </div>
          <div className="Modal-footer">
            <button onClick={handleClose}>Cerrar</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="login-container">
      <div className="form">
        <h2>Iniciar sesión</h2>
        <form>
          <button type="submit" className="form__btn" onClick={handleOpenModal}>
            Iniciar sesión
          </button>
          <label htmlFor="username" className="form__label">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            className="form__input"
            placeholder="Ingrese su nombre de usuario"
          />
          
        </form>
      </div>
      {modalVisible && <LoginModal onClose={() => setModalVisible(false)} />}
    </div>
  );
};

export default Login;

*/

import React, { PropTypes } from 'react';
import PropTypes from 'prop-types';

function Login({ onClose, visible }) {
  Login.propTypes = {
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
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
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
        <div className="Login-footer">
          <button onClick={onClose}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Login;