import { Dot } from "lucide-react";
import PropTypes from "prop-types";
import { ContainerCenter } from "./ContainerCenter";
import { MySocialsMedia } from "./MySocialsMedia";
import {
  EquipmentDeliveryPolicy,
  productsSections,
  ReturnPolicy,
  supportSection,
} from "@/data/dataFooter";

import { ourServices } from "@/data/dataInfo";

const MyListItemsFooter = ({ data }) => {
  return (
    <ul>
      {data !== null
        ? data.map((item) => {
            const { id } = item;
            let text = item.text || item.name;
            return (
              <li
                key={id}
                className="text-sm text-muted-foreground  flex items-center mb-1"
              >
                <Dot className="w-4 h-4 inline-block" />
                <p>{text}</p>
              </li>
            );
          })
        : null}
    </ul>
  );
};
MyListItemsFooter.propTypes = {
  data: PropTypes.array,
};
export const MyFooter = () => {
  return (
    <ContainerCenter className=" w-[80%] h-full overflow-y-auto carousel-container laptop:w-[100%] ">
      <aside className=" flex flex-col items-center laptop:flex-row laptop:justify-between  laptop:gap-8 laptop:overflow-y-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          className="w-[8rem] h-[8rem] object-cover"
        >
          <source src="/imgs/logo-servitec-min.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="laptop:flex">
          <h2 className="text-center text-black font-semibold mb-2 laptop:mb-0 laptop:mr-4">
            Síguenos:
          </h2>
          <MySocialsMedia classItemImg=" w-[1.5rem] h-[1.5rem]" />
        </div>
      </aside>

      <aside className="border-y my-4 py-4 laptop:grid laptop:grid-cols-3 gap-4">
        <div>
          <h2 className="text-lg font-semibold">Productos</h2>
          {MyListItemsFooter({ data: productsSections })}
        </div>

        <div>
          <h2 className="text-lg font-semibold">Servicios</h2>
          {MyListItemsFooter({ data: ourServices })}

          <h2 className="text-lg font-semibold">Soporte</h2>
          {MyListItemsFooter({ data: supportSection })}
        </div>
        <div>
          <h2 className="text-lg font-semibold">Politica de devolución.</h2>
          {MyListItemsFooter({ data: ReturnPolicy })}

          <h2 className="text-lg font-semibold">
            Politica de entrega de equipos.
          </h2>
          {MyListItemsFooter({ data: EquipmentDeliveryPolicy })}
        </div>
      </aside>
      <footer className="text-center text-muted-foreground laptop:flex laptop:justify-between">
        <h3>
          Copyright © 2025 Servitec Halachó. Todos los derechos reservados.
        </h3>
        <h4 className="my-2">Desarrollado por: Alexis🧢Chim</h4>
      </footer>
    </ContainerCenter>
  );
};
