"use client";
import styles from "./styles.module.scss";

const HeaderSection = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <a href="/">
            <img src="/relucri-logo.svg" alt="Relucri logo" />
          </a>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            <li className={styles.header__navItem}>
              <a href="/" className={styles.header__navLink}>
                Início
              </a>
            </li>
            <li className={styles.header__navItem}>
              <a href="/about" className={styles.header__navLink}>
                Quem Somos
              </a>
            </li>
            <li className={styles.header__navItem}>
              <a href="/products" className={styles.header__navLink}>
                Produtos
              </a>
            </li>
            <li className={styles.header__navItem}>
              <a href="/promotion" className={styles.header__navLink}>
                Promoção
              </a>
            </li>
            <li className={styles.header__navItem}>
              <a href="/contact" className={styles.header__navLink}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <a href="/contact" className={styles.header__button}>
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
