import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

export const MyCarousel = (props) => {
  const { children, carouselRef, classNameCarousel, classNameButtons } = props;

  // Función para desplazarse hacia la izquierda
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Función para desplazarse hacia la derecha
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <article
        ref={carouselRef}
        className={`carousel-container flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 overflow-y-hidden pl-[.5rem] laptop:pl-[9rem] m-2 p-6 ${classNameCarousel}`}
      >
        {children}
      </article>

      <footer
        className={`flex justify-end items-center py-2 px-4 gap-4 text-black font-bold text-xl laptop:pr-14 ${classNameButtons}`}
      >
        <button
          onClick={handlePrev}
          className=" bg-[#dcdce1] w-[2.5rem] h-[2.5rem] rounded-full z-10 flex justify-center items-center"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="bg-[#dcdce1] w-[2.5rem] h-[2.5rem] rounded-full z-10 flex justify-center items-center"
        >
          <ChevronRight />
        </button>
      </footer>
    </>
  );
};
// Definición de las propTypes MyCarousel
MyCarousel.propTypes = {
  children: PropTypes.node.isRequired, // `children` puede ser cualquier cosa que React pueda renderizar (elementos, string, números, etc.)
  // carouselRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  carouselRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  classNameCarousel: PropTypes.string, // `classNameCarousel` debe ser una cadena de texto (clase CSS)
  classNameButtons: PropTypes.string, // `classNameButtons` debe ser una cadena de texto (clase CSS)
};
