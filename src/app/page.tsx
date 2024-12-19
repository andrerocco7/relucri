import HorizontalSwiper from "@/app//components/HorizontalSwiper";
import HeaderSection from "@/app/components/HeaderSection";
import Contato from "@/app/components/Contato";
import DescriptionSection from "./components/DescriptionSection";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import styles from "./page.module.css";
import ServiceSection from "./components/ServiceSection";
import ProductSwiper from "./components/ProductSwiper";
import Link from "next/link";

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
      <Link
        href="https://wa.me/41995419939?text=Gostaria%20de%20solicitar%20uniformes%20para%20minha%20empresa!"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </Link>
    </div>
  );
}
