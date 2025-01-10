import { ContainerCenter } from "./ContainerCenter";
import { StoreSvg } from "@/myComponents/icons/StoreSvg";
import { ObserverElement } from "./ObserverElement";
import { PictureImage } from "./PictureImage";

export const BannerMagSafe = () => {
  return (
    <section className="bg-[#f5f5f7] ">
      <ContainerCenter className=" flex flex-col text-center laptop:flex-row laptop:text-left">
        <aside className="gap-4 flex flex-col justify-center items-center  laptop:w-[50%] laptop:items-start">
          <ObserverElement
            animateIn="animate-fade-left"
            animateOut="animate-fade-right"
          >
            <h2 className="font-semibold text-4xl tracking-tight leading-10 laptop:text-[5.3rem] laptop:leading-none laptop:w-[100%]">
              MagSafe. Combinaciones increíbles.
            </h2>
          </ObserverElement>
          <ObserverElement
            animateIn="animate-fade-left"
            animateOut="animate-fade-right"
            className="text-center"
          >
            <p className="laptop:text-left text-[1.1rem] m-0 laptop:text-[1.4rem]">
              Añadele una funda, una cartera o un cargador
              alámbrico/inalámbrico.{" "}
            </p>
          </ObserverElement>
          <ObserverElement
            animateIn="animate-fade-left"
            animateOut="animate-fade-right"
          >
            <a
              href="https://www.facebook.com/media/set/?set=a.406010471553159&type=3"
              target="_blank"
              rel="noopener noreferrer"
              className="animation-fill-mode: forwards bg-black flex text-white hover:bg-slate-800 text-base sm:text-lg px-6 sm:px-8 py-2 laptop:py-3 rounded-md transition-all duration-300 w-auto"
            >
              <StoreSvg /> Mirar Productos
            </a>
          </ObserverElement>
        </aside>

        <ObserverElement
          animateIn="animate-fade"
          animateOut="animate-fade-right"
          className="flex justify-center items-center laptop:w-[50%] "
        >
          <PictureImage
            classNamePicture="w-full h-full overflow-hidden"
            alt="Imagen responsive"
            srcAvif={{
              small: "/imgs/BannerMagSafe/products-magsafe-movil.avif",
              medium: "/imgs/BannerMagSafe/products-magsafe-tablet.avif",
              large: "/imgs/BannerMagSafe/products-magsafe-desktop.avif",
            }}
            srcWebp={{
              small: "/imgs/BannerMagSafe/products-magsafe-movil.webp",
              medium: "/imgs/BannerMagSafe/products-magsafe-tablet.webp",
              large: "/imgs/BannerMagSafe/products-magsafe-desktop.webp",
            }}
            srcJpg={{
              large: "/imgs/BannerMagSafe/products-magsafe-desktop.webp",
            }}
            classNameImages="w-[100%] h-[100%] object-cover"
          />
        </ObserverElement>
      </ContainerCenter>
    </section>
  );
};
