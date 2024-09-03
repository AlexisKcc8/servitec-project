import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [openModalId, setOpenModalId] = useState(" ");

  //todo - funcion para saber, con que tienes que hacer match el dialog y mostrar informacion que tenga que ver con el componente que lo activo
  const handleDialog = (isOpen, id) => {
    setOpenModalId(isOpen ? id : null);
  };

  //todo - funcion para abrir el dialog en un determinado componente.
  const setDialoglId = (id) => {
    setOpenModalId(id);
  };

  let data = { openModalId, handleDialog, setDialoglId };
  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};
ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
