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
      className="flex justify-center items-center bg-black hover:bg-gray-800 text-white rounded-full px-8 py-2 font-medium transition-all duration-300 ease-in-out transform hover:shadow-lg"
    >
      {title}
    </a>
  );
};
ButtonLinkWhatsApp.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
};
