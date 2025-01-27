import { creditCardsMercadoPago, phoneCompanies } from "@/data/dataInfo";
import { ContainerCenter } from "./ContainerCenter";
import { ObserverElement } from "./ObserverElement";

export const BannerMercadoPago = () => {
  return (
    <section className="">
      <ContainerCenter className=" flex flex-col laptop:flex-row min-h-[70vh] gap-4">
        <ObserverElement
          animateIn="animate-fade-up"
          animateOut="animate-fade-down"
          className="laptop:w-[70%] bg-gradient-to-br from-[#009EE3] to-[#0073CF] rounded-xl relative p-4"
        >
          <div className=" ">
            <h2 className="text-[2rem] laptop:text-[4rem] w-[80%] font-bold text-white">
              ¡Paga fácil y rápido con Mercado Pago!
            </h2>
            <img
              src="/imgs/logo-mercado-pago-center.svg"
              alt="logo-mercado-pago.svg"
              className="w-[11rem] h-[11rem]  object-cover absolute top-[-1rem] right-[-2rem]"
            />
            <h3 className="text-lg text-[#ffff00] laptop:w-[50%] laptop:text-[2rem] ">
              En Servitec Halachó, ¡tus compras son sin complicaciones!
            </h3>
          </div>
          <img
            src="/imgs/card-payment.svg"
            alt="img-mercado-pago"
            loading="lazy"
            className=" laptop:w-[35rem] laptop:h-[35rem] object-cover m-0 laptop:absolute top-[11rem] right-0"
          />
        </ObserverElement>

        <aside className="laptop:w-[30%] flex flex-col gap-4">
          <ObserverElement
            animateIn="animate-fade-up"
            animateOut="animate-fade-down"
            className="flex flex-col justify-center items-start rounded-xl bg-[#f5f5f7]  p-4"
          >
            <h2 className="text-[1.3rem] laptop:text-[1.4rem] font-bold">
              🪪 ¡Ahora es más fácil pagar!
            </h2>
            <p className="my-2">
              Aceptamos tarjetas de crédito de los bancos más confiables. 🎉
            </p>
            <div className="grid grid-cols-3 place-items-center gap-2 w-[100%]">
              {creditCardsMercadoPago.map((card) => (
                <img
                  key={card.name}
                  src={card.image}
                  alt={card.name}
                  loading="lazy"
                  className="w-[3.2rem] h-[3.2rem] object-contain"
                />
              ))}
            </div>
            <p className="text-[.8rem] my-2">
              ¡No esperes más y disfruta de nuestros productos/servicios con la
              facilidad de tu tarjeta! 🙌
            </p>
          </ObserverElement>

          <ObserverElement
            animateIn="animate-fade-up"
            animateOut="animate-fade-down"
            className="flex flex-col justify-center items-start rounded-xl bg-[#f5f5f7] min-h-[30vh] p-4"
          >
            <h2 className="text-[1.3rem] laptop:text-[1.4rem] font-bold">
              ¡Recarga en segundos, conecta sin límites!
            </h2>
            <p>
              Servitec tiene las mejores opciones para ti. 📳Recargar nunca fue
              tan fácil🤳
            </p>
            <section className="flex w-[100%]">
              <aside className="w-[50%]">
                <img src="/imgs/phone-companies/phone-companies.svg" alt="" />
              </aside>
              <aside className="grid grid-cols-2 place-items-center gap-2 w-[50%]">
                {phoneCompanies.map((company) => (
                  <img
                    key={company.name}
                    src={company.image}
                    alt={company.name}
                    loading="lazy"
                    className="w-[3.5rem] h-[3.5rem] object-contain"
                  />
                ))}
              </aside>
            </section>
            <p className="text-[.8rem] my-2">
              Otras companias disponibles: Bite, Piyofon, MiMovi. 🙌
            </p>
          </ObserverElement>
        </aside>
      </ContainerCenter>
    </section>
  );
};
