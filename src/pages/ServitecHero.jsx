import { StoreSvg } from "@/myComponents/icons/StoreSvg";
import { ArrowDown } from "@/myComponents/icons/ArrowDown";
import { PictureImage } from "@/myComponents/PictureImage";
import { ObserverElement } from "@/myComponents/ObserverElement";
export const ServitecHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background image with overlay */}
      <PictureImage
        classNamePicture="absolute inset-0 z-0 w-[100%] h-[100vh]"
        alt="Imagen responsive"
        srcAvif={{
          small: "/imgs/hero/bg-hero-movil.avif",
          medium: "/imgs/hero/bg-hero-tablet.avif",
          large: "/imgs/hero/bg-hero-desktop.avif",
        }}
        srcWebp={{
          small: "/imgs/hero/bg-hero-movil.webp",
          medium: "/imgs/hero/bg-hero-tablet.webp",
          large: "/imgs/hero/bg-hero-desktop.webp",
        }}
        srcJpg={{
          large: "/imgs/hero/bg-hero.jpg",
        }}
        classNameImages="w-[100%] h-[100%] object-cover opacity-50 image-rendering"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 laptop:via-black/70 to-transparent"></div>

      {/* Content */}
      <header className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl overflow-hidden">
        <ObserverElement animateIn="animate-fade-up" animateOut="">
          <div className="border border-white rounded-lg title-page-main relative ">
            <h1 className="text-[3.8rem] sm:text-5xl md:text-6xl laptop:text-[10rem] font-bold tracking-tight sm:mb-6 text-white [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">
              SERVITEC
            </h1>
          </div>
        </ObserverElement>

        <ObserverElement animateIn="animate-fade-up" animateOut="">
          <h2 className="text-[2rem] sm:text-5xl md:text-6xl laptop:text-[3rem] font-bold tracking-tight mb-4 sm:mb-6 text-white [text-shadow:0_0_20px_rgba(255,255,255,0.4)]">
            REPARACIÓNES RÁPIDAS, SONRISAS GARANTIZADAS.
          </h2>
        </ObserverElement>

        <ObserverElement animateIn="animate-fade-left" animateOut="">
          <p className="text-base sm:text-lg md:text-3xl lg:text-4xl mb-6 sm:mb-8 max-w-3xl mx-auto text-gray-200 [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">
            Expertos en reparación de dispositivos móviles y computadoras.
            Soluciones rápidas y confiables para mantener tu tecnología
            funcionando sin problemas.
          </p>
        </ObserverElement>

        <ObserverElement animateIn="animate-fade-down" animateOut="">
          <div className="flex flex-col laptop:flex-row justify-center items-center space-y-4 laptop:space-y-0 laptop:space-x-4">
            <a
              href="#"
              className="bg-white flex text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-2 laptop:py-3 rounded-md transition-all duration-300 w-auto"
            >
              <StoreSvg /> Mirar Productos
            </a>
            <a
              href="#our-services"
              className="bg-transparent flex text-white border border-white hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-2 laptop:py-3 rounded-md transition-all duration-300 w-auto"
            >
              <ArrowDown /> Servicios
            </a>
          </div>
        </ObserverElement>
      </header>
    </section>
  );
};
