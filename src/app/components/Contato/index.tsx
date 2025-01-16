"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/sendMail", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Informações enviadas com sucesso");
      } else {
        toast.error("Erro ao enviar informações");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contato" className={styles.container}>
      <ToastContainer />
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Contato</h2>
        <form className={styles.form}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
            rows={5}
          ></textarea>
          {/* <div className={styles.terms}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Você concorda com os Termos de Uso</label>
          </div> */}
          <button
            type="submit"
            className={styles.button}
            onClick={handleSubmit}
          >
            {loading ? (
              <img src="/otimizare2.gif" alt="Loading..." />
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contato;
