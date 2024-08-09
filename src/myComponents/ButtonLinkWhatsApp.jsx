import { WhatsApp } from "./icons/WhatsApp";

export const ButtonLinkWhatsApp = (props) => {
  const defaultMessage = `¡Hola! 👋 Me gustaría solicitar sus servicios de mantenimiento para equipos de cómputo y celulares.
  
  Por favor, indíquenme cómo proceder o si necesitan más detalles sobre los equipos.

  Gracias y quedo atento a su respuesta.`;

  const { message = defaultMessage } = props;

  let whatsappLink = `https://wa.me/525656401126?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 flex w-[3.5rem] h-[3.5rem] laptop:w-[4rem] laptop:h-[4rem] rounded-[50%] justify-center items-center fixed bottom-4 right-4 "
    >
      <WhatsApp />
    </a>
  );
};
