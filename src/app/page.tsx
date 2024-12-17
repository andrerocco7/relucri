import HorizontalSwiper from "@/app//components/HorizontalSwiper";
import HeaderSection from "@/app/components/HeaderSection";
import Contato from "@/app/components/Contato";
import DescriptionSection from "./components/DescriptionSection";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import styles from "./page.module.css";
import ServiceSection from "./components/ServiceSection";
import ProductSwiper from "./components/ProductSwiper";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderSection />
      <HorizontalSwiper />
      <ProductSection />
      <ServiceSection />
      <DescriptionSection />
      <ProductSwiper />
      <Contato />
      <Footer />
    </div>
  );
}
