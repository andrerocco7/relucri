"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1 - Horário de Atendimento */}
        <div className={styles.column}>
          <h3 className={styles.title}>Horário de Atendimento</h3>
          <p className={styles.text}>
            segunda à sexta das 8h às 17h rua João Bettega Nº6545 CIC
          </p>
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
              <Link href="tel:+554132391794">(41) 3239-1794</Link>
            </li>
            <li>
              <img src="/whats.svg" alt="" />
              <Link href="https://api.whatsapp.com/send?phone=5541991048448">
                (41) 99541-9939
              </Link>
            </li>
            <li>
              <img src="/mail.svg" alt="" />
              <Link href="mailto:contato@relucriuniformes.com">
                relucricomercial@gmail.com
              </Link>
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <Link href="#">
              <img src="/insta.png" alt="Instagram" />
            </Link>
            <Link href="#">
              <img src="/linkedin.png" alt="Facebook" />
            </Link>
          </div>
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
