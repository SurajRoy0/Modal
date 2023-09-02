import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen
    ? "fixed inset-0 overflow-hidden transition-opacity ease-in-out duration-300 opacity-100"
    : "fixed inset-0 overflow-hidden transition-opacity ease-in-out duration-300 opacity-0 pointer-events-none";

  return (
    <div className={modalClassName}>
      <div  onClick={onClose} className="absolute inset-0 bg-black opacity-75"></div>
      <div className="p-4 w-screen max-w-[400px] fixed bg-white bottom-0 h-[80vh] md:right-0 md:h-screen rounded-tl-3xl rounded-tr-3xl md:rounded-r-none overflow-y-scroll customScroll">
       {children}
      </div>
    </div>
  );
};

export default Modal;
