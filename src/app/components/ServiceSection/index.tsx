"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

const ServiceSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/image.png" alt=""></img>
          <h1 className={styles.title}>
            <strong>RELUCRI COMERCIAL LTDA.</strong>

            <span className={styles.highlight}>UNIFORMES PROFISSIONAIS</span>
          </h1>
        </div>

        <p className={styles.description}>
          Somos uma empresa que atuamos a 15 anos no mercado na confecção de
          uniformes profissionais, atendendo diversos segmentos do mercado:
          indústrias, comércios, construção civil, transportadoras,
          supermercados, entre outros. Trabalhamos alinhados com um mercado
          inovador, oferecendo ao cliente um atendimento personalizado.
          Fornecemos uniformes dentro dos padrões estabelecidos pela sua
          empresa, com o compromisso de trabalhar com preços acessíveis,
          respeitando a qualidade e o prazo de entrega.
        </p>

        <div className={styles.services}>
          <Link href="/atendimento-personalizado" className={styles.card}>
            <img src="/people.svg" alt=""></img>
            <p>Atendimento Personalizado</p>
          </Link>
          <Link href="/entrega-garantida" className={styles.card}>
            <img src="/truck.svg" alt=""></img>
            <p>Entrega Garantida</p>
          </Link>
          <Link href="/orcamento-online" className={styles.card}>
            <img src="/mouse.png" alt=""></img>
            <p>Orçamento Online</p>
          </Link>
          <Link href="/experiencia-automacao" className={styles.card}>
            <img src="/trophy.svg" alt=""></img>
            <p>Experiência e Automação</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
