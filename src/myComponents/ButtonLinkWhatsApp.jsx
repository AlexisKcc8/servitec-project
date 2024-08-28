import { WhatsApp } from "./icons/WhatsApp";
import PropTypes from "prop-types";

export const ButtonLinkWhatsApp = (props) => {
  const defaultMessage = `¡Hola! 👋 Me gustaría solicitar sus servicios de mantenimiento para equipos de cómputo y celulares.
  
  Por favor, indíquenme cómo proceder o si necesitan más detalles sobre los equipos.

  Gracias y quedo atento a su respuesta.`;

  const defaultTitle = "+Información";

  const { message = defaultMessage, title = defaultTitle } = props;

  let whatsappLink = `https://wa.me/525656401126?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-servitect-800 w-[100%] flex justify-center items-center p-2 rounded-2xl text-white font-semibold"
    >
      <WhatsApp />
      {title}
    </a>
  );
};
ButtonLinkWhatsApp.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
};
