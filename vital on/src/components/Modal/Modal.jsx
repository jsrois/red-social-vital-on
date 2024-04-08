// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function Modal({ onClose }) {
  return (
    <div className="Modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Formulario de Registro</h1>
        </div>
        <div className="modal-body">
          <form>
            <input type="text" name="nombre" placeholder="Nombre completo" />
            <input type="email" name="correo" placeholder="Correo electrónico" />
            <input type="password" name="contraseña" placeholder="Contraseña" />
            <button type="submit">Registrarse</button>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

  export default Modal;
  
  