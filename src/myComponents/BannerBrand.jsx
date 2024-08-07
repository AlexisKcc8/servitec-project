import { productsBrands } from "@/data/dataInfo";

export const BannerBrand = () => {
  return (
    <section className=" flex justify-center items-center laptop:h-[30vh]">
      <article className=" flex flex-col items-center text-center laptop:w-[80%] laptop:pt-0 laptop:flex-row laptop:justify-center  px-4 laptop:p-0">
        <h2 className="font-semibold text-xl text-gray-700 opacity-20 laptop:mr-20">
          Nuestras marcas:
        </h2>
        <div className="flex items-center justify-center gap-4 laptop:gap-4 flex-wrap">
          {productsBrands !== null
            ? productsBrands.map((brand) => (
                <div key={brand.name} className="w-[5.5rem] h-[5.5rem] ">
                  <img
                    className=" w-[100%] h-[100%] transition duration-300 ease-in-out object-contain hover:scale-105 opacity-20"
                    src={brand.urlBrand}
                    alt={`logo-${brand.name}`}
                  />
                </div>
              ))
            : null}
        </div>
      </article>
    </section>
  );
};
