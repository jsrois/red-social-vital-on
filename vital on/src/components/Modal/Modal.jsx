import React, { PropTypes } from 'react';
import PropTypes from 'prop-types';
function Modal({ onClose, visible }) {
  
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    
  };
 
  return (
    <div className={`Modal ${visible ? 'visible' : ''}`}>
      <div className="Modal-content">
  <div className="Modal-header">
    <h1>Formulario de Registro</h1>
  </div>
  <div className="Modal-body">
    <form>
      <input type="text" name="nombre" placeholder="Nombre completo" />
      <input type="email" name="correo" placeholder="Correo electrónico" />
      <input type="password" name="contraseña" placeholder="Contraseña" />
      <button type="submit">Regístrate</button>
    </form>
  </div>
  <div className="Modal-footer">
    <button onClick={onClose}>Cerrar</button>
  </div>
</div>

    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Modal;
