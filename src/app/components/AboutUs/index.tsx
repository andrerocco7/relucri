import styles from "./styles.module.scss";
import QualitySection from "./QualitySection";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>
            SOBRE A RELUCRI COMERCIAL LTDA. <br></br>UNIFORMES PROFISSIONAIS
          </h2>
        </div>
        <div className={styles.upper}>
          <div className={styles.text1}>
            <h3 className={styles.subtext}>Para Diversas Profissoes</h3>
            <h4>
              Somos uma empresa que atuamos a 15 anos no mercado<br></br> na
              confecção de uniformes profissionais, atendendo diversos<br></br>{" "}
              segmentos do mercado: indústrias, comércios, construção civil,
              <br></br>
              transportadoras, supermercados, entre outros.
            </h4>
          </div>
          <div className={styles.image1}>
            <img src="sobrenos1.png" alt="" />
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.image2}>
            <img src="sobrenos2.png" alt="" />
          </div>
          <div className={styles.text2}>
            <h3 className={styles.subtext}>
              Detalhes que Refletem a Essência de Nossa Marca{" "}
            </h3>
            <h4>
              Valorizamos cada detalhe do processo, desde a escolha do tecido{" "}
              <br></br>
              até o acabamento final, garantindo que cada uniforme reflita os
              <br></br>
              valores e a essência da sua marca. Além disso, trabalhamos com uma
              <br></br>
              ampla variedade de modelos e tamanhos para atender às mais
              <br></br>
              diversas necessidades, sempre respeitando prazos e prezando pelo
              <br></br>
              melhor atendimento.
            </h4>
          </div>
        </div>
        <div className={styles.quality}>
          <QualitySection />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
