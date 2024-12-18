"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const HeaderSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <a href="#">
            <img src="/image.png" alt="Relucri logo" />
          </a>
        </div>
        <button
          className={`${styles.header__hamburger} ${
            isMenuOpen ? styles.open : ""
          }`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`${styles.header__nav} ${
            isMenuOpen ? styles.showMenu : ""
          }`}
        >
          <ul className={styles.header__navList}>
            <li className={styles.header__navItem}>
              <a href="#" className={styles.header__navLink}>
                Início
              </a>
            </li>
            <li className={styles.header__navItem}>
              <a href="/" className={styles.header__navLink}>
                Quem Somos
              </a>
            </li>
            <li className={styles.header__navItem}>
              <a href="/" className={styles.header__navLink}>
                Produtos
              </a>
            </li>
            <li className={styles.header__navItem}>
              <a
                href="https://api.whatsapp.com/send?phone=5541991048448"
                className={styles.header__navLink}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="https://api.whatsapp.com/send?phone=5541991048448"
          className={styles.header__button}
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
