import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModalContext } from "@/context/ModalContext";
import { Plus } from "lucide-react";
import { useContext } from "react";
import PropTypes from "prop-types";

export const CardIncentive = (props) => {
  const { incentive } = props;
  const { id, title, description } = incentive;

  const { setDialoglId } = useContext(ModalContext);

  return (
    <Card
      className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300  w-[23rem] h-[22rem] text-start  snap-center flex-shrink-0 rounded-2xl border-none p-0"
      onClick={() => setDialoglId(id)}
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
