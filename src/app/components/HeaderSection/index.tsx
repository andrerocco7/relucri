"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="#">
            <img src="/image.png" alt="Relucri logo" />
          </Link>
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
              <Link href="#" className={styles.header__navLink}>
                Início
              </Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href="/quemsomos" className={styles.header__navLink}>
                Quem Somos
              </Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href="/productpage" className={styles.header__navLink}>
                Produtos
              </Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href="#contato" className={styles.header__navLink}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="https://wa.me/41995419939?text=Gostaria%20de%20solicitar%20uniformes%20para%20minha%20empresa!"
          className={styles.header__button}
        >
          Fale Conosco
        </Link>
      </div>
    </header>
  );
};

export default HeaderSection;
