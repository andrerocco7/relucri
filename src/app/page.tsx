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
      <a
        href="https://api.whatsapp.com/send?phone=5541991048448"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </a>
    </div>
  );
}
