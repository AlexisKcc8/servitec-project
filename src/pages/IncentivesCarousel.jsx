import { useRef } from "react";
import { MyCarousel } from "@/myComponents/MyCarousel";
import { incentives } from "@/data/dataInfo";
import { CardIncentive } from "@/myComponents/CardIncentive";

export const IncentivesCarousel = () => {
  const incentivesCarouselRef = useRef(null);

  return (
    <section className="text-center my-4 bg-[#f5f5f7] pt-12">
      <header className="text-start laptop:w-[80%] m-auto px-5 laptop:p-0">
        <h2 className=" text-[2rem] font-semibold tracking-tight leading-none laptop:text-[3.5rem]">
          Descubre por qué somos el mejor lugar para comprar tus productos
          electrónicos.
        </h2>
      </header>

      <MyCarousel carouselRef={incentivesCarouselRef}>
        <ul className="flex gap-4">
          {incentives.map((incentive) => (
            <li key={incentive.title}>
              <CardIncentive incentive={incentive} />
            </li>
          ))}
        </ul>
      </MyCarousel>
    </section>
  );
};
