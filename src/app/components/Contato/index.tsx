import React from "react";
import styles from "./styles.module.scss";

const Contato = () => {
  return (
    <section className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Contato</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Nome" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="text"
            placeholder="Telefone ou Whatsapp"
            className={styles.input}
          />
          <textarea
            placeholder="Mensagem"
            className={styles.textarea}
            rows={5}
          ></textarea>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Você concorda com os Termos de Uso</label>
          </div>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contato;
