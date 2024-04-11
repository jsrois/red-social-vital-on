import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">  
      <div className="modal-content">
        <Fragment>
          {children}  
          <button onClick={onClose}>Cerrar</button>
        </Fragment>
      </div>
    </div>
  );
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
