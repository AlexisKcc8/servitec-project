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
        {/* <h2 className=" text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
          Descubre por qué somos el mejor lugar para comprar tus productos
          electrónicos.
        </h2> */}
        <h4 className="text-[1.1rem] text-gray-700 laptop:text-[1.5rem]">
          Descubre la calidad y precios top.
        </h4>
      </header>

      <MyCarousel carouselRef={productsCarouselRef}>
        {products.map((product) => (
          <CardProduct key={product.name} productData={product} />
        ))}
      </MyCarousel>
    </section>
  );
};
