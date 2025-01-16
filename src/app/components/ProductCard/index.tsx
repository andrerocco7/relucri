import styles from "./styles.module.scss";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.uppergrid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className={styles.middlegrid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className={styles.lowergrid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
