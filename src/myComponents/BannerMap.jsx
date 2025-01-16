import { ContainerCenter } from "./ContainerCenter";
import { ObserverElement } from "./ObserverElement";
import { PictureImage } from "./PictureImage";

export const BannerMap = () => {
  return (
    <ContainerCenter>
      <header className="my-8">
        <ObserverElement
          animateIn="animate-fade-right"
          animateOut="animate-fade-left"
        >
          <h2 className="text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
            Ven y visítanos
          </h2>
        </ObserverElement>
        <ObserverElement
          animateIn="animate-fade-right"
          animateOut="animate-fade-left"
        >
          <h2 className="text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
            en nuestra sucursal.
          </h2>
        </ObserverElement>
      </header>

      <article className=" rounded-2xl min-w-[80vw] max-w-[82vw] min-h-[60vh] laptop:flex laptop:w-[100%] laptop:min-h-[90vh] relative overflow-hidden ">
        <PictureImage
          classNamePicture="object-cover w-full h-full absolute top-0 left-0"
          alt="our store awareness"
          srcAvif={{
            small: "/imgs/banner-map/background-banner-map-movil.avif",
            medium: "/imgs/banner-map/background-banner-map-tablet.avif",
            large: "/imgs/banner-map/background-banner-map-desktop.avif",
          }}
          srcWebp={{
            small: "/imgs/banner-map/background-banner-map-movil.webp",
            medium: "/imgs/banner-map/background-banner-map-tablet.webp",
            large: "/imgs/banner-map/background-banner-map-desktop.webp",
          }}
          srcJpg={{
            large: "/imgs/banner-map/background-banner-map-desktop.jpg",
          }}
          classNameImages="w-[100%] h-[100%] object-cover image-rendering"
        />

        <div className="w-full h-full bg-[#00000090] absolute top-0 left-0 flex justify-center items-start laptop:items-center laptop:justify-start">
          <div className="flex flex-col items-center justify-center text-center pt-16 laptop:pt-0 laptop:pl-16  ">
            <h2 className="font-bold text-xl laptop:text-5xl text-white mb-4">
              C. 23 & Calle 20, La Soledad, <br /> 97830 Halachó, Yuc.
            </h2>
            <a
              href="https://maps.app.goo.gl/3f51munDDgaBi1Su6"
              rel="noreferrer"
              target="_blank"
              className="z-10 laptop:text-xl rounded-md bg-white text-black p-2 hover:bg-servitect-900 ease-in duration-300"
            >
              Ver mapa
            </a>
          </div>
        </div>
      </article>
    </ContainerCenter>
  );
};
