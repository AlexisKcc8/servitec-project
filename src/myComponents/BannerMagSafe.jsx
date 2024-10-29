import { Button } from "@/components/ui/button";
import { ContainerCenter } from "./ContainerCenter";
import { StoreSvg } from "@/myComponents/icons/StoreSvg";

export const BannerMagSafe = () => {
  return (
    <section className="bg-[#f5f5f7] ">
      <ContainerCenter className=" flex flex-col text-center laptop:flex-row laptop:text-left">
        <aside className="gap-4 flex flex-col justify-center items-center  laptop:w-[50%] laptop:items-start">
          <h2 className="font-semibold text-4xl tracking-tight leading-10 laptop:text-[5.3rem] laptop:leading-none laptop:w-[100%]">
            MagSafe. Combinaciones increíbles.
          </h2>
          <p className="text-[1.1rem] w-[50%] m-0 laptop:w-[100%] laptop:text-[1.4rem]">
            Añadele una funda, una cartera o un cargador alámbrico/inalámbrico.{" "}
          </p>
          <Button className="z-10 font-bold text-xl bg-black text-white p-6 hover:bg-servitect-900 gap-2 ease-in duration-300">
            <StoreSvg /> Mirar Productos
          </Button>
        </aside>

        <aside className="flex justify-center items-center laptop:w-[50%] ">
          <img
            className="w-full h-full"
            src="/imgs/products-magsafe-whites-desktop.webp"
            alt="image-magsafe-iphone"
          />
        </aside>
      </ContainerCenter>
    </section>
  );
};
