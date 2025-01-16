import styles from "./QualitySection.module.scss";

const QualitySection = () => {
  return (
    <section className={styles.qualitySection}>
      <h2 className={styles.title}>Qualidade e Nossa Prioridade</h2>
      <p className={styles.subtitle}>
        Valorizamos cada detalhe do processo, desde a escolha do tecido até o
        acabamento final, garantindo que cada uniforme reflita os valores e a
        essência da sua marca.
      </p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="t-shirt.png" alt="High-Quality Materials" />
          </div>
          <h3 className={styles.featureTitle}>Material de Alta Qualidade</h3>
          <p className={styles.featureDescription}>
            Para isso, utilizamos materiais de alta qualidade e contamos com uma
            equipe de especialistas dedicados a criar peças confortáveis.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="407525.png" alt="Laconic Design" />
          </div>
          <h3 className={styles.featureTitle}>
            Uniformes Para Diversas Profissoes
          </h3>
          <p className={styles.featureDescription}>
            Confecção de uniformes profissionais, atendendo diversos segmentos
            do mercado: indústrias, comércios, construção civil,
            transportadoras, supermercados, entre outros.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="de-costura.png" alt="Various Sizes" />
          </div>
          <h3 className={styles.featureTitle}>Diversos Tamanhos</h3>
          <p className={styles.featureDescription}>
            Adaptamos nossos produtos para atender a todas as necessidades.
            Oferecemos uma ampla variedade de tamanhos, garantindo que todos
            encontrem a medida perfeita para conforto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
