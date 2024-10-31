import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ourServices } from "@/data/dataInfo";
import { useState } from "react";
import { ContainerCenter } from "@/myComponents/ContainerCenter";
import { PictureImage } from "@/myComponents/PictureImage";
import { ObserverElement } from "@/myComponents/ObserverElement";

const INITIAL_STATE_IMAGE_DESKTOP = {
  imagenAvifDesktop:
    "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.avif",
  imagenWebpDesktop:
    "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.webp",
  imagenJpgDesktop:
    "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.jpg",
};

export const OurServices = () => {
  const [imageDesktopCurrent, setImageDesktopCurrent] = useState(
    INITIAL_STATE_IMAGE_DESKTOP
  );

  const getCurrentImageService = (images) => {
    const { imagenAvifDesktop, imagenWebpDesktop, imagenJpgDesktop } = images;
    let newImages = {
      imagenAvifDesktop,
      imagenWebpDesktop,
      imagenJpgDesktop,
    };

    setImageDesktopCurrent(newImages);
  };

  return (
    <ContainerCenter idSection="our-services">
      <header className="mb-6">
        <ObserverElement
          animateIn="animate-fade-right"
          animateOut="animate-fade-left"
        >
          <h2 className="text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
            Nuestros servicios tecnológicos
          </h2>
        </ObserverElement>
        <ObserverElement
          animateIn="animate-fade-right"
          animateOut="animate-fade-left"
        >
          <h4 className="text-[1.1rem] text-gray-700 laptop:text-[1.5rem]">
            El soporte que necesitas, con la calidad que mereces.
          </h4>
        </ObserverElement>
      </header>
      <article className="bg-[#f5f5f7] rounded-2xl laptop:flex">
        <Accordion
          className="laptop:w-[50%]"
          type="single"
          defaultValue="item-1"
        >
          {ourServices !== null
            ? ourServices.map((service, index) => (
                <ObserverElement
                  key={service.id}
                  animateIn="animate-fade-up"
                  animateOut="animate-fade-down"
                >
                  <AccordionItem
                    className={`p-6 laptop:py-2 laptop:px-6 ${
                      index == ourServices.length - 1 ? "border-none" : ""
                    } `}
                    value={`item-${index + 1}`}
                  >
                    <AccordionTrigger
                      onClick={() => getCurrentImageService(service.images)}
                      className="text-[1.4rem] text-left font-semibold hover:no-underline"
                    >
                      {service.name}
                    </AccordionTrigger>
                    <AccordionContent className="text-left">
                      <p className="text-[1.1rem] mb-4">
                        {service.description}
                      </p>
                      <PictureImage
                        classNamePicture="w-full h-full overflow-hidden laptop:hidden"
                        alt="Imagen responsive"
                        srcAvif={{
                          small: service.images.imagenAvif,
                          medium: service.images.imagenAvif,
                          large: "",
                        }}
                        srcWebp={{
                          small: service.images.imagenWebp,
                          medium: service.images.imagenWebp,
                          large: "",
                        }}
                        srcJpg={{
                          large: service.images.imagenJpg,
                        }}
                        classNameImages="w-[100%] h-[100%] object-cover"
                      />
                    </AccordionContent>
                  </AccordionItem>
                </ObserverElement>
              ))
            : null}
        </Accordion>
        <ObserverElement
          animateIn="animate-fade"
          animateOut="animate-fade-up"
          className="hidden rounded-tr-2xl rounded-br-2xl overflow-hidden laptop:w-[50%] laptop:flex justify-center items-center"
        >
          <PictureImage
            classNamePicture="w-full h-full overflow-hidden"
            alt="Imagen responsive"
            srcAvif={{
              small: "",
              medium: imageDesktopCurrent.imagenAvifDesktop,
              large: imageDesktopCurrent.imagenAvifDesktop,
            }}
            srcWebp={{
              small: "",
              medium: imageDesktopCurrent.imagenWebpDesktop,
              large: imageDesktopCurrent.imagenWebpDesktop,
            }}
            srcJpg={{
              large: imageDesktopCurrent.imagenJpgDesktop,
            }}
            classNameImages="w-[100%] h-[100%] object-cover"
          />
        </ObserverElement>
      </article>
    </ContainerCenter>
  );
};
