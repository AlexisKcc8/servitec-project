import { products } from "@/data/dataProducts";
import { useRef } from "react";
import { MyCarousel } from "@/myComponents/MyCarousel";
import { AppleStyleProductCard } from "@/myComponents/AppleStyleProductCard";
import { ObserverElement } from "@/myComponents/ObserverElement";

export const ProductCarousel = () => {
  const productsCarouselRef = useRef(null);

  return (
    <section className="text-center my-4">
      <header className="text-start laptop:w-[80%] m-auto px-5 laptop:p-0">
        <ObserverElement
          animateIn="animate-fade-right"
          animateOut="animate-fade-left"
        >
          <h2 className=" animate-fill-forwards text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
            Nuestros productos más vendidos
          </h2>
        </ObserverElement>
        <ObserverElement
          animateIn="animate-fade-right"
          animateOut="animate-fade-left"
        >
          <h4 className="text-[1.1rem] text-gray-700 laptop:text-[1.5rem]">
            Adquiere calidad a precios top.
          </h4>
        </ObserverElement>
      </header>

      <MyCarousel carouselRef={productsCarouselRef}>
        <ObserverElement
          animateIn="animate-fade-up"
          animateOut="animate-fade-down"
          className="card-product product-cover  ease-in duration-300 w-[20rem] text-start p-4 flex flex-col snap-center flex-shrink-0 rounded-lg border border-servitect-700 overflow-hidden hover:cursor-pointer hover:scale-[1.03] hover:ease-in"
        >
          <h2 className="font-semibold text-3xl mt-4">Ponte a la moda</h2>
          <p className="text-lg tracking-wide">
            Descubre los nuevos colores y funcionalidades de tus accesorios
            favoritos.
          </p>
        </ObserverElement>

        {products.map((product) => (
          <ObserverElement
            key={product.id}
            animateIn="animate-fade-up"
            animateOut="animate-fade-down"
            className=""
          >
            <AppleStyleProductCard productData={product} />
          </ObserverElement>
        ))}
      </MyCarousel>
    </section>
  );
};
