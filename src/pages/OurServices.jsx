import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ourServices } from "@/data/dataInfo";
import { useState } from "react";
import { ContainerCenter } from "@/myComponents/ContainerCenter";

const INITIAL_STATE_IMAGE_DESKTOP = {
  imagenAvifDesktop:
    "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.avif",
  imagenWebpDesktop:
    "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.webp",
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
        <h2 className="text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
          Nuestros servicios tecnológicos
        </h2>

        <h4 className="text-[1.1rem] text-gray-700 laptop:text-[1.5rem]">
          El soporte que necesitas, con la calidad que mereces.
        </h4>
      </header>
      <article className="bg-[#f5f5f7] rounded-2xl laptop:flex">
        <Accordion
          className="laptop:w-[50%]"
          type="single"
          defaultValue="item-1"
        >
          {ourServices !== null
            ? ourServices.map((service, index) => (
                <AccordionItem
                  key={service.id}
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
                    <p className="text-[1.1rem] mb-4">{service.description}</p>
                    <picture className="w-full h-full overflow-hidden laptop:hidden">
                      <source
                        className="w-full h-full object-cover"
                        type="image/avif"
                        srcSet={service.images.imagenAvif}
                      />
                      <source
                        className="w-full h-full object-cover"
                        type="image/webp"
                        srcSet={service.images.imagenWebp}
                      />
                      <img
                        className="w-full h-full object-cover"
                        src={service.images.imagenJpg}
                        alt={`imagen-${service.images.imagenJpg}`}
                      />
                    </picture>
                  </AccordionContent>
                </AccordionItem>
              ))
            : null}
        </Accordion>
        <section className="hidden rounded-tr-2xl rounded-br-2xl overflow-hidden laptop:w-[50%] laptop:flex justify-center items-center">
          <picture className="w-full h-full overflow-hidden">
            <source
              className="w-full h-full object-cover"
              type="image/avif"
              srcSet={imageDesktopCurrent.imagenAvifDesktop}
            />
            <source
              className="w-full h-full object-cover"
              type="image/webp"
              srcSet={imageDesktopCurrent.imagenWebpDesktop}
            />
            <img
              className="w-full h-full object-cover"
              src={imageDesktopCurrent.imagenJpgDesktop}
              alt={`imagen`}
            />
          </picture>
        </section>
      </article>
    </ContainerCenter>
  );
};
