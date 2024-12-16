"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const HorizontalSwiper = () => {
  return (
    <section className={styles.swiperSection}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={styles.slideContent}>
            <img
              src="/slide1.jpg"
              alt="Uniforme em Curitiba"
              className={styles.slideImage}
            />
            <div className={styles.overlay}>
              <h1 className={styles.title}>Uniformes Profissionais </h1>
              <p className={styles.description}>
                Temos orgulho de oferecer uniformes de alta qualidade para
                empresas, escolas, times esportivos e eventos especiais.
              </p>
              <button className={styles.button}>Saiba mais</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={styles.slideContent}>
            <img
              src="/slide1.jpg"
              alt="Uniforme em Curitiba"
              className={styles.slideImage}
            />
            <div className={styles.overlay}>
              <h1 className={styles.title}>Uniformes Profissionais </h1>
              <p className={styles.description}>
                Temos orgulho de oferecer uniformes de alta qualidade para
                empresas, escolas, times esportivos e eventos especiais.
              </p>
              <button className={styles.button}>Saiba mais</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HorizontalSwiper;
