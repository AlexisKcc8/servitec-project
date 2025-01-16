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
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: footerRef, inView: isFooterVisible } = useInView({
    threshold: 0.1, // Detecta si al menos el 10% del footer es visible
  });
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
        <PurchaseMethod />
        <IncentivesCarousel />
        <OurServices />
        <BannerMagSafe />
        <BannerMap />
        {!isFooterVisible && (
          <div className={`fixed bottom-8 right-8 z-50 animate-fade-in`}>
            <MyDrawerFooter>
              <MyFooter />
            </MyDrawerFooter>
          </div>
        )}
        <div ref={footerRef}>
          <MyFooter />
        </div>
        {/* //modal generico para las cards o componentes que lo necesiten */}
        <DialogModal />
      </main>
    </>
  );
}

export default App;
