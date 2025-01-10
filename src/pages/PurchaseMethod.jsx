import { purchaseMethod } from "@/data/dataInfo";
import { ContainerCenter } from "@/myComponents/ContainerCenter";
import { ObserverElement } from "@/myComponents/ObserverElement";
import { CatalogPhotosButton } from "@/myComponents/CatalogPhotosButton";

export const PurchaseMethod = () => {
  return (
    <ContainerCenter>
      <ObserverElement
        animateIn="animate-fade-right"
        animateOut="animate-fade-left"
      >
        <h2 className="text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
          Nuestro método de compra.
        </h2>
      </ObserverElement>
      <ObserverElement
        animateIn="animate-fade-right"
        animateOut="animate-fade-left"
      >
        <h4 className="text-[1.1rem] text-gray-700 laptop:text-[1.5rem]">
          Experiencia online o en sucursal.
        </h4>
      </ObserverElement>

      <section className="flex flex-wrap w-[100%] laptop:mt-10 laptop:px-24 ">
        <aside className="w-[100%]  laptop:w-[50%] my-10 laptop:my-0 ">
          <article className="flex flex-col relative gap-8 px-4  min-w-[312px] ">
            <div className="w-[3px] absolute left-[29px] top-[12px] h-[90%] -z-10 bg-servitect-800"></div>

            {purchaseMethod !== null
              ? purchaseMethod.map((item, index) => (
                  <ObserverElement
                    key={item.id}
                    className="flex items-center text-lg gap-4"
                    animateIn="animate-fade-up"
                    animateOut="animate-fade-down"
                  >
                    <div className="rounded-full h-7 w-7 min-h-7 min-w-7 text-[18px] font-black flex items-center justify-center bg-servitect-900 text-white">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-semibold leading-none text-[20px]">
                      {item.text}
                    </span>
                  </ObserverElement>
                ))
              : null}
          </article>
          <ObserverElement
            animateIn="animate-fade-up"
            animateOut="animate-fade-down"
          >
            <CatalogPhotosButton className="mt-12 ml-4 w-[20rem] flex items-center justify-center whitespace-nowrap text-xl font-bold rounded-[15px]  disabled:opacity-100 hover:bg-primary/90">
              Visualizar Productos
            </CatalogPhotosButton>
          </ObserverElement>

          <ObserverElement
            animateIn="animate-fade-up"
            animateOut="animate-fade-down"
          >
            <p className="mt-2 ml-4 text-sm  text-slate-500">
              Productos originales y de alta calidad.
            </p>
          </ObserverElement>
        </aside>

        <aside className="w-[100%] laptop:w-[50%] flex justify-center items-center text-center  laptop:items-start laptop:text-left">
          <ObserverElement
            animateIn="animate-fade-up"
            animateOut="animate-fade-down"
          >
            <p className="relative text-[20px] text-primary font-semibold max-w-[20rem] leading-tight text-slate-500">
              Alternativamente, en caso de no encontrar el producto deseado en
              nuestro catalogo, puedes preguntar por medio de WhatsApp sin
              ningún compromiso.
            </p>
          </ObserverElement>
        </aside>
      </section>
    </ContainerCenter>
  );
};
