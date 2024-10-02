import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalContext } from "@/context/ModalContext";
import { Plus } from "lucide-react";
import { useContext } from "react";
import PropTypes from "prop-types";

export const CardIncentive = (props) => {
  const { incentive } = props;
  const { title, description, titleModal, descriptionModal } = incentive;

  const { openModal } = useContext(ModalContext);

  return (
    <Card
      className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300  w-[23rem] h-[22rem] text-start  snap-center flex-shrink-0 rounded-2xl border-none p-0"
      onClick={() =>
        openModal(
          <DialogContent className="overflow-hidden flex flex-col justify-start items-start h-[100vh] mt-14 pt-12 laptop:w-[50rem] laptop:h-[auto] laptop:p-12">
            <DialogHeader className="text-start flex flex-row justify-center items-center ">
              <incentive.icon className="h-16 w-24 text-primary m-0 p-0" />
              <DialogTitle className="text-[3rem] leading-[2.9rem]  laptop:text-[4.5rem] laptop:leading-[4.8rem] ml-4">
                {titleModal}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-[1.2rem] text-black">
              {descriptionModal}
            </DialogDescription>
          </DialogContent>
        )
      }
    >
      <CardHeader>
        <CardTitle className="flex flex-col items-start justify-center gap-2">
          <incentive.icon className="h-12 w-24 text-primary mb-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow relative">
        <CardDescription className="text-base">{description}</CardDescription>
        <Button className="w-[2.5rem] h-[2.5rem] rounded-full m-0 p-0 absolute bottom-4 right-8 ">
          <Plus />
        </Button>
      </CardContent>
    </Card>
  );
};
CardIncentive.propTypes = {
  incentive: PropTypes.object.isRequired,
};
