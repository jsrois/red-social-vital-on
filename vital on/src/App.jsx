import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Header onOpenModal={handleOpenModal} />
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;

