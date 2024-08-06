import { Button } from "@/components/ui/button";
import { purchaseMethod } from "@/data/dataInfo";
import { StoreSvg } from "./icons/StoreSvg";

export const PurchaseMethod = () => {
  return (
    <section className="h-screen flex justify-center">
      <article className=" h-[100%] flex flex-col items-center px-5 laptop:max-w-80p laptop:h-[80%] laptop:pt-0 ">
        <header className="flex flex-col items-start justify-start">
          <h2 className="text-[2.5rem] font-semibold tracking-tight leading-none laptop:text-5xl">
            Nuestro método de compra.
          </h2>
          <h4 className="text-[1.1rem] text-gray-700">
            Experiencia online o en sucursal.
          </h4>
        </header>

        <section className="flex flex-wrap w-[100%] laptop:mt-10">
          <aside className="w-[100%]  laptop:w-[50%] my-10 laptop:my-0">
            <article className="flex flex-col relative gap-8 px-4  min-w-[312px]">
              <div className="w-[3px] absolute left-[29px] top-[12px] h-[90%] -z-10 bg-servitect-800"></div>

              {purchaseMethod !== null
                ? purchaseMethod.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center text-lg gap-4"
                    >
                      <div className="rounded-full h-7 w-7 min-h-7 min-w-7 text-[18px] font-black flex items-center justify-center bg-servitect-900 text-white">
                        {item.id}
                      </div>
                      <span className="text-gray-700 font-semibold leading-none text-[20px]">
                        {item.text}
                      </span>
                    </div>
                  ))
                : null}
            </article>

            <Button className="mt-12 ml-4 items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-[44px] py-[8px] px-[15px] text-xl font-bold rounded-[15px] gap-[12px] flex disabled:opacity-100 disabled:bg-slate-600">
              <StoreSvg /> Visualizar Productos
            </Button>
            <p className="mt-2 ml-4 text-sm  text-slate-500">
              Productos originales y de alta calidad.
            </p>
          </aside>

          <aside className="w-[100%] laptop:w-[50%] flex justify-center items-center text-center  laptop:items-start laptop:text-left">
            <p className="relative text-[20px] text-primary font-semibold max-w-[20rem] leading-tight text-slate-500">
              Alternativamente, en caso de no encontrar el producto deseado en
              nuestro catalogo, puedes preguntar por medio de WhatsApp sin
              ningún compromiso.
            </p>
          </aside>
        </section>
      </article>
    </section>
  );
};
