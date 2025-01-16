// components/ProductCard.js
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src="camiseta3.png" alt="Produto" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Nome do Produto</h3>
        <p className={styles.description}>
          Esta é uma breve descrição do produto.
        </p>
        <h2 className={styles.price}>R$199,90</h2>
        <button className={styles.button}>Comprar Agora</button>
      </div>
    </div>
  );
};

export default ProductCard;
