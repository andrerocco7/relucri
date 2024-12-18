"use client";
import styles from "./styles.module.scss";

const ProductSection = () => {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.title}>
        UNIFORMES PROFISSIONAIS DE
        <span className={styles.highlight}>ALTO PADRÃO</span>
      </h2>
      <p className={styles.description}>
        A Relucri trabalha na confecção de uniformes com excelente qualidade,
        tudo para que você e seus funcionários tenham conforto e segurança
        dentro da sua empresa.
      </p>

      <div className={styles.productList}>
        {/* Produto 1 */}
        <div className={styles.productCard}>
          <img
            src="/product1.png"
            alt="Uniforme Mulher"
            className={styles.productImage}
          />
          <h3 className={styles.productName}>Uniforme</h3>
          <p className={styles.productGender}>Mulher</p>
          <p className={styles.productPrice}></p>
        </div>

        {/* Produto 2 */}
        <div className={styles.productCard}>
          <img
            src="/product2.png"
            alt="Uniforme Homem"
            className={styles.productImage}
          />
          <h3 className={styles.productName}>Uniforme</h3>
          <p className={styles.productGender}>Homem</p>
          <p className={styles.productPrice}></p>
        </div>

        {/* Produto 3 */}
        <div className={styles.productCard}>
          <img
            src="/product1.png"
            alt="Uniforme Homem"
            className={styles.productImage}
          />
          <h3 className={styles.productName}>Uniforme</h3>
          <p className={styles.productGender}>Homem</p>
          <p className={styles.productPrice}></p>
        </div>

        {/* Produto 4 */}
        <div className={styles.productCard}>
          <img
            src="/product2.png"
            alt="Uniforme Mulher"
            className={styles.productImage}
          />
          <h3 className={styles.productName}>Uniforme</h3>
          <p className={styles.productGender}>Mulher</p>
          <p className={styles.productPrice}></p>
        </div>

        {/* Produto 5 */}
        <div className={styles.productCard}>
          <img
            src="/product1.png"
            alt="Uniforme Homem"
            className={styles.productImage}
          />
          <h3 className={styles.productName}>Uniforme</h3>
          <p className={styles.productGender}>Homem</p>
          <p className={styles.productPrice}></p>
        </div>

        {/* Produto 6 */}
        <div className={styles.productCard}>
          <img
            src="/product2.png"
            alt="Uniforme Homem"
            className={styles.productImage}
          />
          <h3 className={styles.productName}>Uniforme</h3>
          <p className={styles.productGender}>Homem</p>
          <p className={styles.productPrice}></p>
        </div>
        <div className={styles.button}>
          <button className={styles.button}>Ver todos os produtos</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
