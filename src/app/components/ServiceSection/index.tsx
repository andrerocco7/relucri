"use client";
import styles from "./styles.module.scss";

const ServiceSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt=""></img>
          <h1 className={styles.title}>
            <strong>RELUCRI COMERCIAL LTDA.</strong>
            <br />
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
          <a href="/atendimento-personalizado" className={styles.card}>
            <span>🧑‍💼</span>
            <p>Atendimento Personalizado</p>
          </a>
          <a href="/entrega-garantida" className={styles.card}>
            <span>🚚</span>
            <p>Entrega Garantida</p>
          </a>
          <a href="/orcamento-online" className={styles.card}>
            <span>📄</span>
            <p>Faça seu Orçamento Online</p>
          </a>
          <a href="/experiencia-automacao" className={styles.card}>
            <span>🏆</span>
            <p>Experiência </p>
          </a>
        </div>

        <button className={styles.button}>Fale Conosco</button>
      </div>
    </section>
  );
};

export default ServiceSection;
