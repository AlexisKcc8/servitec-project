import { productsBrands } from "@/data/dataInfo";
import { ContainerCenter } from "./ContainerCenter";
import { ObserverElement } from "./ObserverElement";

export const BannerBrand = () => {
  return (
    <ContainerCenter className="flex flex-col justify-center items-center laptop:flex-row">
      <ObserverElement
        animateIn="animate-fade-left"
        animateOut="animate-fade-right"
      >
        <h2 className=" font-semibold text-xl text-gray-700 opacity-20 laptop:mr-8">
          Nuestras marcas:
        </h2>
      </ObserverElement>
      <div className="flex items-center justify-center gap-4 laptop:gap-4 flex-wrap">
        {productsBrands !== null
          ? productsBrands.map((brand) => (
              <ObserverElement
                key={brand.name}
                className="w-[5.5rem] h-[5.5rem]"
                animateIn="animate-fade-up"
                animateOut="animate-fade-down"
              >
                <img
                  className=" w-[100%] h-[100%] transition duration-300 ease-in-out object-contain hover:scale-105 opacity-20"
                  src={brand.urlBrand}
                  alt={`logo-${brand.name}`}
                />
              </ObserverElement>
            ))
          : null}
      </div>
    </ContainerCenter>
  );
};
