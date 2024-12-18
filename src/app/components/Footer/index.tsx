"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1 - Horário de Atendimento */}
        <div className={styles.column}>
          <div className={styles.icon}>
            <img src="/calendar.svg" alt="" />
            <h3 className={styles.title}> Segunda à Sexta das 8h às 17h</h3>
          </div>
          <div className={styles.icon}>
            <img src="/pin.svg" alt="" />
            <p className={styles.text}>
              R. Alfredo Pujol, 263 - Cidade Industrial de Curitiba
            </p>
          </div>
          <img
            src="/image.png"
            alt="Relucri Comercial"
            className={styles.logo}
          />
        </div>

        {/* Coluna 3 - Informações de Contato */}
        <div className={styles.column}>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.contactList}>
            <li>
              <img src="/phone.svg" alt="" />
              <Link href="https://wa.me/41995419939?text=Gostaria%20de%20solicitar%20uniformes%20para%20minha%20empresa!">
                (41) 99541-9939
              </Link>
            </li>
            <li>
              <img src="/whats.svg" alt="" />
              <Link href="https://wa.me/41995419939?text=Gostaria%20de%20solicitar%20uniformes%20para%20minha%20empresa!">
                (41) 99541-9939
              </Link>
            </li>
            <li>
              <img src="/mail.svg" alt="" />
              <Link href="mailto:contato@relucriuniformes.com">
                relucricomercial@gmail.com
              </Link>
            </li>
            <li>
              <img src="/inste2.svg" alt="Instagram" />
              <Link href="https://www.instagram.com/relucriuniformes?igsh=MTg0MnM5eHhlajJzZg==">
                @relucriuniformes
              </Link>
            </li>
            <li>
              <img src="/linkedin.svg" alt="Facebook" />
              <Link href="https://www.linkedin.com/in/relucri-comercial-uniformes-profissionais-7610571b6/">
                RELUCRI COMERCIAL UNIFORMES PROFISSIONAIS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Direitos Reservados a
          <span className={styles.highlight}>Relucri Comercial</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
