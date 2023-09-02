import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import ModalContent from "./components/ModalContent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
       <ModalContent />
      </Modal>
    </div>
  );
}

export default App;
