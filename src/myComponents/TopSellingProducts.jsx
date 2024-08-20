import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/dataProducts";
import { CardProduct } from "./CardProduct";

export const TopSellingProducts = () => {
  return (
    <section className="flex justify-center mb-12 border">
      <article className=" w-[100%] px-5  laptop:p-0 laptop:text-center">
        <h2 className="text-[2rem]  font-semibold tracking-tight leading-none laptop:text-5xl mb-4">
          Descubre por qué somos el mejor lugar para comprar tus productos
          electrónicos.
        </h2>

        <div className="relative  w-[100%] border-red-600 bg-black ">
          <Carousel className="relative flex flex-col  bg-blue-600  ">
            <CarouselContent className="pl-[5rem] carousel-container  overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 border border-red-700">
              {products !== null
                ? products.map((product) => (
                    <CarouselItem
                      key={product.name}
                      className="basis-1/2 laptop:basis-1/3"
                    >
                      <CardProduct productData={product} />
                    </CarouselItem>
                  ))
                : null}
            </CarouselContent>

            <div className="sticky bottom-0 left-0 w-[100%] h-[5rem] bg-white shadow-[0px_-20px_10px_10px_rgba(255,255,255)]">
              <CarouselPrevious className="absolute bottom-0 w-10 h-10  left-[70%]  bg-[#dcdce1]  laptop:left-[90%]" />
              <CarouselNext className="absolute bottom-0 w-10 h-10 right-0 bg-[#dcdce1] " />
            </div>
          </Carousel>
        </div>
      </article>
    </section>
  );
};
