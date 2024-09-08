import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Este estado controla el contenido dinámico del modal

  // Función para abrir el modal con contenido específico
  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  let data = { isOpen, modalContent, openModal, closeModal };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};
ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
