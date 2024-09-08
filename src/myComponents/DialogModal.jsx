import { Dialog } from "@/components/ui/dialog";
import { ModalContext } from "@/context/ModalContext";

import { useContext } from "react";

export const DialogModal = () => {
  const { isOpen, modalContent, closeModal } = useContext(ModalContext);

  if (!isOpen || !modalContent) return null; // No renderizar si el modal no está abierto

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      {modalContent} {/* Aquí se renderiza el contenido dinámico */}
    </Dialog>
  );
};
