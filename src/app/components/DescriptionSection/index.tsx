"use client";
import styles from "./styles.module.scss";

const DescriptionSection = () => {
  return (
    <section className={styles.descriptionSection}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>UNIFORMES PROFISSIONAIS EM CURITIBA</h2>
        <p className={styles.highlightText}>
          Experiência no ramo de confecção de uniformes profissionais para
          empresas!
        </p>
        <p className={styles.description}>
          Contamos com uma{" "}
          <span className={styles.bold}>equipe competente</span> e com
          maquinário
          <span className={styles.bold}> próprio</span>, pois acreditamos que
          profissionais uniformizados e protegidos reforçam a imagem de
          confiabilidade, organização, segurança e higiene de uma empresa.
          Contamos também com produtos de altíssima qualidade, além de tecidos
          certificados pelo padrão <span className={styles.bold}>ISO</span> e
          EPIs certificados pelo
          <span className={styles.bold}> INMETRO</span>.
        </p>
        <p className={styles.description}>
          Confeccionamos qualquer tipo de uniforme profissional, personalizados
          com o logotipo da sua empresa em bordado, sublimação ou silk-screen.
          Se você precisa de uniformes para a sua empresa em{" "}
          <span className={styles.bold}>Curitiba e Região</span>,{" "}
          <a href="#" className={styles.link}>
            entre em contato conosco
          </a>{" "}
          e realize um orçamento!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/uniforme.jpg"
          alt="Uniforme Profissional"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default DescriptionSection;
