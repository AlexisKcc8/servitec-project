import { Drawer, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Dot } from "lucide-react";

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
                <DrawerDescription>{text}</DrawerDescription>
              </li>
            );
          })
        : null}
    </ul>
  );
};
export const MyFooter = () => {
  return (
    <ContainerCenter className=" w-[80%] h-full overflow-y-auto carousel-container laptop:w-[100%] ">
      <Drawer>
        <aside className=" flex flex-col items-center laptop:flex-row laptop:justify-between  laptop:gap-8 laptop:overflow-y-hidden">
          <div className="w-[7.5rem] h-[7.5rem] ">
            <img
              className="w-full h-full object-cover"
              src="/imgs/logo-servitec.png"
              alt="logo-servitec.png"
            />
          </div>
          <div className="laptop:flex">
            <DrawerTitle className="text-center text-black font-semibold mb-2 laptop:mb-0 laptop:mr-4">
              Síguenos:
            </DrawerTitle>
            <MySocialsMedia classItemImg=" w-[1.5rem] h-[1.5rem]" />
          </div>
        </aside>

        <aside className="border-y my-4 py-4 laptop:grid laptop:grid-cols-3 gap-4">
          <div>
            <DrawerTitle className="text-lg font-semibold">
              Productos
            </DrawerTitle>
            {MyListItemsFooter({ data: productsSections })}
          </div>

          <div>
            <DrawerTitle className="text-lg font-semibold">
              Servicios
            </DrawerTitle>
            {MyListItemsFooter({ data: ourServices })}

            <DrawerTitle className="text-lg font-semibold">Soporte</DrawerTitle>
            {MyListItemsFooter({ data: supportSection })}
          </div>
          <div>
            <DrawerTitle className="text-lg font-semibold">
              Politica de devolución.
            </DrawerTitle>
            {MyListItemsFooter({ data: ReturnPolicy })}

            <DrawerTitle className="text-lg font-semibold">
              Politica de entrega de equipos.
            </DrawerTitle>
            {MyListItemsFooter({ data: EquipmentDeliveryPolicy })}
          </div>
        </aside>
        <footer className="text-center text-muted-foreground laptop:flex laptop:justify-between">
          <h3>
            Copyright © 2025 Servitec Halachó. Todos los derechos reservados.
          </h3>
          <h4>Created by: KR-8🧢</h4>
        </footer>
      </Drawer>
    </ContainerCenter>
  );
};
