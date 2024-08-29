import { products } from "@/data/dataProducts";
import { CardProduct } from "./CardProduct";
import { useRef } from "react";
import { MyCarousel } from "./MyCarousel";
export const ProductCarousel = () => {
  const productsCarouselRef = useRef(null);

  return (
    <section className="text-center my-4">
      <header className="text-start laptop:w-[80%] m-auto px-5 laptop:p-0">
        <h2 className=" text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
          Nuestros productos más vendidos
        </h2>
        <h4 className="text-[1.1rem] text-gray-700 laptop:text-[1.5rem]">
          Adquiere calidad a precios top.
        </h4>
      </header>

      <MyCarousel carouselRef={productsCarouselRef}>
        <div className="card-product product-cover  ease-in duration-300 w-[20rem] text-start p-4 flex flex-col snap-center flex-shrink-0 rounded-lg border border-servitect-700 overflow-hidden hover:cursor-pointer hover:scale-[1.03] hover:ease-in">
          <h2 className="font-semibold text-3xl mt-4">Ponte a la moda</h2>
          <p className="text-lg tracking-wide">
            Descubre los nuevos colores y funcionalidades de tus accesorios
            favoritos.
          </p>
        </div>
        {products.map((product) => (
          <CardProduct key={product.name} productData={product} />
        ))}
      </MyCarousel>
    </section>
  );
};
