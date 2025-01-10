import { StoreSvg } from "@/myComponents/icons/StoreSvg";
import PropTypes from "prop-types";
export const CatalogPhotosButton = (props) => {
  const { className, children } = props;
  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "https://wa.me/c/5219971294008";
    } else {
      window.open("https://wa.me/c/5219971294008", "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`animation-fill-mode: forwards flex bg-black  text-white text-base sm:text-lg px-6 sm:px-8 py-2 laptop:py-3 rounded-md transition-all duration-300  ${className}`}
    >
      <StoreSvg />{" "}
      <span className="ml-2">{children ? children : " Mirar productos"}</span>
    </button>
  );
};
CatalogPhotosButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
