"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./styles.module.scss";

// Definir o tipo para cada produto
type Product = {
  id: number;
  image: string;
  name: string;
  color: string;
  price: string;
};

// Definir o tipo para o objeto de produtos
type Products = {
  Camisetas: Product[];
  Calças: Product[];
  Moletons: Product[];
};

// Dados para cada categoria
const products: Products = {
  Camisetas: [
    {
      id: 1,
      image: "/camiseta1.png",
      name: "Camiseta Amarela",
      color: "Amarela",
      price: "R$60,00",
    },
    {
      id: 2,
      image: "/camiseta3.png",
      name: "Camiseta Vermelha",
      color: "Vermelha",
      price: "R$55,00",
    },
    {
      id: 3,
      image: "/camiseta2.png",
      name: "Camiseta Azul",
      color: "Azul",
      price: "R$50,00",
    },
    {
      id: 4,
      image: "/camiseta1.png",
      name: "Camiseta Amarela",
      color: "Amarela",
      price: "R$60,00",
    },
  ],
  Calças: [
    {
      id: 1,
      image: "/calça1.png",
      name: "Calça de Uniforme",
      color: "Azul",
      price: "R$100,00",
    },
    {
      id: 2,
      image: "/calça2.png",
      name: "Calça Jeans",
      color: "Preta",
      price: "R$120,00",
    },
    {
      id: 3,
      image: "/calça3.png",
      name: "Calça Moletom",
      color: "Cinza",
      price: "R$110,00",
    },
    {
      id: 4,
      image: "/calça1.png",
      name: "Calça de Uniforme",
      color: "Azul",
      price: "R$100,00",
    },
  ],
  Moletons: [
    {
      id: 1,
      image: "/moletom1.png",
      name: "Moletom Empresas",
      color: "Azul",
      price: "R$150,00",
    },
    {
      id: 2,
      image: "/moletom1.png",
      name: "Moletom Casual",
      color: "Preto",
      price: "R$160,00",
    },
    {
      id: 3,
      image: "/moletom1.png",
      name: "Moletom Conforto",
      color: "Cinza",
      price: "R$155,00",
    },
    {
      id: 4,
      image: "/moletom1.png",
      name: "Moletom Estampado",
      color: "Branco",
      price: "R$170,00",
    },
  ],
};

const ProductSwiper = () => {
  const [category, setCategory] = useState<keyof Products>("Camisetas");

  const handleCategoryChange = (category: keyof Products) => {
    setCategory(category);
  };

  return (
    <div className={styles.productSwiper}>
      <h2>Os Produtos</h2>
      <hr />
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
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className={styles.swiper}
        >
          {products[category].map((product) => (
            <SwiperSlide key={product.id}>
              <div className={styles.swiperSlide}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.color}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
