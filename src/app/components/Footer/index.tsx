"use client";
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
            src="/logo.svg"
            alt="Relucri Comercial"
            className={styles.logo}
          />
        </div>

        {/* Coluna 2 - Botão Contato */}
        <div className={styles.column}>
          <button className={styles.contactButton}>Contato</button>
        </div>

        {/* Coluna 3 - Informações de Contato */}
        <div className={styles.column}>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.contactList}>
            <li>
              <span>📞</span> <a href="tel:+554132391794">(41) 3239-1794</a>
            </li>
            <li>
              <span>📱</span> <a href="tel:+554199549939">(41) 99549-9939</a>
            </li>
            <li>
              <span>✉️</span>{" "}
              <a href="mailto:contato@relucriuniformes.com">
                relucricomercial@gmail.com
              </a>
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <a href="#">
              <img src="/insta.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/linkedin.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos Reservados */}
      <div className={styles.footerBottom}>
        <p>
          Direitos Reservados a{" "}
          <span className={styles.highlight}>Relucri Commercial</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
