import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PropTypes from "prop-types";
import { ButtonLinkWhatsApp } from "./ButtonLinkWhatsApp";

import { PictureImage } from "./PictureImage";
import { memo } from "react";

export const AppleStyleProductCard = memo((props) => {
  const { productData } = props;
  const { images, name, oldPrice, price } = productData;
  const {
    imagenAvif,
    imagenWebp,
    imagenJpg,
    imagenAvifDesktop,
    imagenWebpDesktop,
    imagenJpgDesktop,
  } = images;

  const imageUrl = `https://servitec-halacho.netlify.app${imagenJpgDesktop}`; // URL de la imagen en la carpeta public

  let message = `Hola👋, me gustaría adquirir el siguiente producto: ${name} ${imageUrl}`;

  return (
    <Card className=" max-w-sm mx-auto overflow-hidden bg-[#FAFAFA] rounded-2xl shadow-lg card-product ease-in duration-300 w-[20rem] text-center p-0 flex flex-col snap-center flex-shrink-0 border border-servitect-700 hover:cursor-pointer hover:scale-[1.03] hover:ease-in">
      <CardHeader className="h-[7.5rem] flex items-center justify-center">
        <h2 className="font-bold text-2xl tracking-tight overflow-hidden text-ellipsis whitespace-pre-line line-clamp-3">
          {name}
        </h2>
      </CardHeader>
      <CardContent className="px-2 flex-1">
        <PictureImage
          classNamePicture="aspect-square relative mb-8"
          alt="Imagen responsive"
          srcAvif={{
            small: imagenAvif,
            medium: "",
            large: imagenAvifDesktop,
          }}
          srcWebp={{
            small: imagenWebp,
            medium: "",
            large: imagenWebpDesktop,
          }}
          srcJpg={{
            small: imagenJpg,
            medium: "",
            large: imagenJpgDesktop,
          }}
          classNameImages="object-contain w-full h-full"
        />

        <div className="flex flex-col items-center space-y-4">
          <p className="font-semibold text-2xl">
            Por tan solo:{" "}
            <span className="text-servitect-800 text-3xl font-bold">
              ${price.toFixed(2)}
            </span>
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>

          <ButtonLinkWhatsApp message={message} title="Adquirir" />
        </div>
        <footer className="my-4">
          <p className="">
            Precio anterior:{" "}
            <span className="line-through text-red-600">
              ${oldPrice.toFixed(2)}
            </span>
          </p>
        </footer>
      </CardContent>
      <div className="absolute top-4 right-4">
        <div className="w-4 h-4 rounded-full bg-servitect-800"></div>
      </div>
    </Card>
  );
});

AppleStyleProductCard.displayName = "AppleStyleProductCard";

AppleStyleProductCard.propTypes = {
  productData: PropTypes.object.isRequired,
};
