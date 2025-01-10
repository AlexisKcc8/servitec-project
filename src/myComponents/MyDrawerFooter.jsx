import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function MyDrawerFooter(props) {
  const { children } = props;
  return (
    <Drawer className="">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="h-[3.5rem] w-[3.5rem] rounded-full px-[.5rem]"
        >
          <img
            className=" w-full h-full object-cover"
            src="/icons/icon-show-footer.svg"
            alt="icon-show-footer"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80vh] laptop:h-auto">
        <DrawerHeader className="relative w-full bg-blue-600 m-0 p-0">
          <DrawerClose asChild className="absolute top-0 right-8">
            <Button variant="outline">✖️</Button>
          </DrawerClose>
        </DrawerHeader>
        <DrawerTitle className="text-center font-semibold text-2xl hidden">
          kley
        </DrawerTitle>
        <DrawerDescription className="hidden">hgddshf</DrawerDescription>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
MyDrawerFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
