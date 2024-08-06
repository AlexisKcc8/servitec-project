import WaveScene from "@/myComponents/WaveScene";
import { Button } from "@/components/ui/button";

import { StoreSvg } from "@/myComponents/icons/StoreSvg";
import { ArrowDown } from "@/myComponents/icons/ArrowDown";

export const Hero = () => {
  return (
    <header className="h-screen flex justify-center items-center ">
      <section className="relative h-[100%] flex flex-col items-center text-center rounded-2xl overflow-hidden gap-6 pt-[10rem] laptop:max-w-80p laptop:h-[80%] laptop:pt-0 laptop:justify-center">
        <WaveScene />
        <div className="z-10 flex font-bold">
          <p className="z-10 bg-servitect-800 text-white py-2 px-5 rounded-2xl">
            SERVITECT
          </p>{" "}
        </div>
        <h1 className="z-10 font-black uppercase text-[2.5rem] tracking-tight leading-none laptop:text-6xl laptop:max-w-[80%]">
          REPARACIÓNES RÁPIDAS, SONRISAS GARANTIZADAS.
        </h1>
        <h2 className="z-10 text-center text-2xl not-italic text-primary font-semibold max-w-fit leading-tight w-[90%] laptop:text-3xl laptop:max-w-[60%]">
          La tecnología al servicio de tu comodidad: Productos y servicios
          diseñados para hacer tu vida más fácil y conveniente.
        </h2>
        <Button className="z-10 font-bold text-xl bg-servitect-main text-white p-6 hover:bg-servitect-900 gap-2">
          <StoreSvg /> Mirar Productos
        </Button>
        <Button className="z-10 font-bold text-xl bg-[transparent] text-black hover:bg-slate-300 p-6">
          <ArrowDown /> Servicios
        </Button>
      </section>
    </header>
  );
};
