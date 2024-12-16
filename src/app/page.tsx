import HorizontalSwiper from "@/app//components/HorizontalSwiper";
import HeaderSection from "@/app/components/HeaderSection";

import DescriptionSection from "./components/DescriptionSection";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderSection />
      <HorizontalSwiper />
      <ProductSection />
      <DescriptionSection />
      <Footer />
    </div>
  );
}
