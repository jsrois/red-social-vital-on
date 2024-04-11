import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import './Styles.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModalRegister = () => setActiveModal('register');
  const handleOpenModalLogin = () => setActiveModal('login');
  const handleCloseModal = () => setActiveModal(null);

  return (
    <div className="App">
      <Header
        onOpenModalRegister={handleOpenModalRegister}
        onOpenModalLogin={handleOpenModalLogin}
      />
      {activeModal && (
        <Modal onClose={handleCloseModal}>
          {activeModal === 'register' && (
            <>
              <h1>Formulario de Registro</h1>
              <form>
                <input type="text" name="nombre" placeholder="Nombre completo" />
                <input type="email" name="correo" placeholder="Correo electrónico" />
                <input type="password" name="contraseña" placeholder="Contraseña" />
                <button type="submit">Regístrate</button>
              </form>
            </>
          )}
          {activeModal === 'login' && (
            <>
              <h1>Formulario de Login</h1>
              <form>
                <input type="email" name="correo" placeholder="Correo electrónico" />
                <input type="password" name="contraseña" placeholder="Contraseña" />
                <button type="submit">Login</button>
              </form>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}