import { ServitecHero } from "@/pages/ServitecHero";
import { BannerBrand } from "@/myComponents/BannerBrand";
import { ProductCarousel } from "@/pages/ProductCarousel";
import { PurchaseMethod } from "@/pages/PurchaseMethod";
import { OurServices } from "@/pages/OurServices";
import { DialogModal } from "@/myComponents/DialogModal";
import { IncentivesCarousel } from "@/pages/IncentivesCarousel";
import { BannerMagSafe } from "@/myComponents/BannerMagSafe";
import { VideoPlayer } from "@/myComponents/VideoPlayer";
import { BannerMap } from "@/myComponents/BannerMap";
import { MyDrawerFooter } from "@/myComponents/MyDrawerFooter";
import { MyFooter } from "@/myComponents/MyFooter";
import { InView } from "react-intersection-observer";
import { useState } from "react";

function App() {
  const [footerView, setFooterView] = useState(false);
  return (
    <>
      <main className="sm:px-36 min-h-screen relative flex flex-col justify-center">
        <ServitecHero />
        <VideoPlayer
          videoSrc="/videos/Video Servitec Original.mp4"
          thumbnailSrc="/imgs/hero/layer-video-repair.webp"
        />
        <BannerBrand />
        <ProductCarousel />
        <PurchaseMethod /> {/*ESTE TIENE PROBLEMAS DE SCROLL VERTICAL*/}
        <IncentivesCarousel />
        <OurServices />
        <BannerMagSafe />
        <BannerMap />
        {/* //modal generico para las cards o componentes que lo necesiten */}
        <DialogModal />
        {footerView ? null : (
          <InView>
            {({ ref, inView }) => (
              <div
                ref={ref}
                className={`fixed bottom-8 right-8 z-50 ${
                  inView ? "animate-fade" : "animate-fade-down"
                }`}
              >
                <MyDrawerFooter>
                  <MyFooter />
                </MyDrawerFooter>
              </div>
            )}
          </InView>
        )}
        <InView>
          {({ ref, inView }) => (
            <div
              ref={ref}
              className={`${
                inView ? setFooterView(true) : setFooterView(false)
              }`}
            >
              <MyFooter />
            </div>
          )}
        </InView>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}

export default App;
