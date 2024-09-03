import { Dialog } from "@/components/ui/dialog";
import { ModalContext } from "@/context/ModalContext";

import PropTypes from "prop-types";
import { useContext } from "react";

export const DialogModal = (props) => {
  const { children, id } = props;
  const { handleDialog, openModalId } = useContext(ModalContext);
  return (
    <Dialog
      open={openModalId === id}
      onOpenChange={(isOpen) => handleDialog(isOpen, id)}
    >
      {children}
    </Dialog>
  );
};
DialogModal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
