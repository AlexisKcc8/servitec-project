import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { ButtonLinkWhatsApp } from "./ButtonLinkWhatsApp";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export const AppleStyleProductCard = (props) => {
  const { productData } = props;
  const { image, name, titleImg, description, price } = productData;
  const { openModal } = useContext(ModalContext);

  const imageUrl = `${window.location.origin}/imgs/products/${titleImg}`; // URL de la imagen en la carpeta public

  let message = `Hola👋, me gustaria adquirir el siguiente producto: ${name} ${imageUrl} `;
  return (
    <Card className=" max-w-sm mx-auto overflow-hidden bg-[#FAFAFA] rounded-2xl shadow-lg card-product  ease-in duration-300 w-[20rem] text-center p-0 flex flex-col snap-center flex-shrink-0  border border-servitect-700  hover:cursor-pointer hover:scale-[1.03] hover:ease-in">
      <CardContent className="py-6 px-2">
        <div className="text-center mb-6">
          <h2 className="font-bold text-2xl mb-2 tracking-tight overflow-hidden text-ellipsis whitespace-pre-line line-clamp-1">
            {name}
          </h2>
        </div>

        <div className="aspect-square relative mb-8 ">
          <img
            src={image}
            alt={titleImg}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <p className="font-semibold text-2xl">
            Desde{" "}
            <span className="text-servitect-main text-3xl font-bold">
              ${price.toFixed(2)}
            </span>
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>

          <ButtonLinkWhatsApp message={message} title="Adquirir" />

          <Button
            variant="link"
            onClick={() =>
              openModal(
                <DialogContent className="flex flex-col laptop:flex-row laptop:h-[80vh]">
                  <aside className="laptop:w-[50%] aspect-square ">
                    <img
                      className="object-cover w-full h-full"
                      src={image}
                      alt=""
                    />
                  </aside>
                  <aside className="laptop:w-[50%] gap-4 flex flex-col justify-center items-center">
                    <DialogHeader>
                      <DialogTitle className="font-bold text-5xl ">
                        {name}
                      </DialogTitle>
                      <p className="font-semibold text-2xl my-2">
                        Desde{" "}
                        <span className="text-servitect-main text-3xl font-bold">
                          ${price.toFixed(2)}
                        </span>
                      </p>
                    </DialogHeader>
                    <DialogDescription className="text-2xl text-center">
                      {description}
                    </DialogDescription>
                    <ButtonLinkWhatsApp message={message} title="Adquirir" />
                  </aside>
                </DialogContent>
              )
            }
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Saber más <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <div className="absolute top-4 right-4">
        <div className="w-4 h-4 rounded-full bg-servitect-main"></div>
      </div>
    </Card>
  );
};
AppleStyleProductCard.propTypes = {
  productData: PropTypes.object.isRequired,
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  titleImg: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};
