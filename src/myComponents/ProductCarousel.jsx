import { products } from "@/data/dataProducts";
import { CardProduct } from "./CardProduct";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const ProductCarousel = () => {
  const carouselRef = useRef(null);

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
    <section className="text-center my-6">
      <header className="text-start laptop:flex laptop:flex-col laptop:justify-center laptop:items-center">
        <div className="px-5">
          <h2 className=" text-[2rem] font-semibold tracking-tight leading-none laptop:text-5xl">
            Nuestros productos más vendidos
          </h2>
          <h4 className="text-[1.1rem] text-gray-700">
            Descubre la calidad y precios top.
          </h4>
        </div>
      </header>

      <article
        ref={carouselRef}
        className="carousel-container flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 overflow-y-hidden pl-[1.5rem] laptop:pl-[8.5rem] my-6"
      >
        {products.map((product) => (
          <CardProduct key={product.name} productData={product} />
        ))}
      </article>

      <footer className="flex justify-end items-center py-2 px-4 gap-4 text-black font-bold text-xl">
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
    </section>
  );
};
