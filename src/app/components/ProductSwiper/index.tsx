"use client";

import React, { useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./styles.module.scss";

const ProductSwiper = () => {
  const [category, setCategory] = useState("Camisetas");

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <div className={styles.productSwiper}>
      <h2>Os melhores Produtos</h2>
      <div className={styles.categoryTabs}>
        <button
          className={category === "Camisetas" ? styles.activeTab : ""}
          onClick={() => handleCategoryChange("Camisetas")}
        >
          Camisetas
        </button>
        <button
          className={category === "Calças" ? styles.activeTab : ""}
          onClick={() => handleCategoryChange("Calças")}
        >
          Calças
        </button>
        <button
          className={category === "Moletons" ? styles.activeTab : ""}
          onClick={() => handleCategoryChange("Moletons")}
        >
          Moletons
        </button>
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          loop
          className={styles.swiper}
        >
          {category === "Camisetas" && (
            <>
              <div className={styles.swiperSlide}>
                <img src="/camiseta1.png" alt="Camiseta 1" />
                <h3>Camisa Amarela de proteção</h3>
                <p>Amarela</p>
                <p className={styles.price}>R$60,00</p>
              </div>
              {/* Adicionar mais itens para Camisetas */}
            </>
          )}
          {category === "Calças" && (
            <>
              <div className={styles.swiperSlide}>
                <img src="/calça1.png" alt="Calça 1" />
                <h3>Calça de Uniforme </h3>
                <p>Azul</p>
                <p className={styles.price}>R$100.00</p>
              </div>
              {/* Adicionar mais itens para Calças */}
            </>
          )}
          {category === "Moletons" && (
            <>
              <div className={styles.swiperSlide}>
                <img src="/moletom1.png" alt="Moletom 1" />
                <h3>Moletom Empresas</h3>
                <p>Azul</p>
                <p className={styles.price}>R$150.00</p>
              </div>
              {/* Adicionar mais itens para Moletons */}
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
