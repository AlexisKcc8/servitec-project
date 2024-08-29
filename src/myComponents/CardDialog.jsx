import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

import { useState } from "react";

export const CardDialog = (props) => {
  const { incentive } = props;
  const [openModalId, setOpenModalId] = useState(null);

  const { title, description, icon } = incentive;
  return (
    <Dialog
      open={openModalId === title}
      onOpenChange={(isOpen) => setOpenModalId(isOpen ? title : null)}
    >
      <Card
        className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300  w-[23rem] h-[22rem] text-start  snap-center flex-shrink-0 rounded-2xl border-none p-0"
        onClick={() => setOpenModalId(title)}
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <incentive.icon className="h-6 w-6 text-primary" />
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription> {description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
