import React from "react";
import styles from "./disciplines.module.scss";
import { AiOutlinePlus, AiFillFileText } from "react-icons/ai";

const Disciplines = () => {
  const periods = {
    0: ["A", "B", "C"],
    1: [
      "Construção de Algoritmos",
      "Arquitetura de Comptadores",
      "Fundamentos de Administração",
      "Gestão de Processos de Negócios",
      "Fundamentos da Matemática",
      "Matemática Discreta",
      "Fundamentos de SI",
    ],
    2: [
      "Programação Estruturada",
      "Fundamentos de Redes",
      "Modelagem de Dados",
      "Engenharia de Requisitos",
      "Cálculo",
      "Metodologia da Pesquisa Científica",
    ],
    3: [
      "Programação Orientada a Objetos",
      "Fundamentos da Web",
      "Banco de Dados I",
      "Álgebra Linear",
      "Algoritmos e Estrutura de Dados",
    ],
    4: [
      "Programação de Aplicações Coorporativas",
      "Sistemas Operacionais",
      "Banco de Dados II",
      "Administração de Banco de Dados",
      "Engenharia de Software",
      "Análise e Projetos de Sistemas",
      "Algoritmos em Grafos",
    ],
    5: [
      "Programação para Web",
      "Administração de Redes",
      "Probabilidade e Estatística",
      "Gestão do Conhecimento da Informação",
      "Qualidade de Software",
      "Projeto e Arquitetura de Software",
    ],
    6: [
      "Programação Paralela e Concorrente",
      "Segurança e Auditoria de Sistemas",
      "Programação de Clientes Web",
      "Teste e Manutenção de Software",
      "Empreendedorismo Digital",
    ],
    7: [
      "Gestão de Projetos de TI",
      "Interação H/C",
      "Tecnologias Sustentavéis",
      "Ética",
      "Projeto Integrador de Sistemas",
    ],
    8: ["Governança de TI", "Legislação e Prop. Intelectual", "Economia"],
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Banco de Provas CEFET</h1>
      <ul className={styles.disciplines}>
        {periods[1].map((course) => {
          return (
            <li className={styles.disciplineContainer}>
              <div className={styles.disciplineHeader}>
                <h3 className={styles.disciplineTitle}>{course}</h3>
                <button className={styles.disciplineButton}>
                  <AiOutlinePlus />
                </button>
              </div>
              {course === "Arquitetura de Comptadores" && 
              <ul className={styles.files}>
                <li className={styles.fileContainer}>
                  <AiFillFileText />
                  <a className={styles.file} href="google.com">
                    Prova-p1.pdf
                  </a>
                </li>
                <li className={styles.fileContainer}>
                  <AiFillFileText />
                  <a className={styles.file} href="google.com">
                    Prova-p1.pdf
                  </a>
                </li>
                <li className={styles.fileContainer}>
                  <AiFillFileText />
                  <a className={styles.file} href="google.com">
                    Prova-p1.pdf
                  </a>
                </li>
                <li className={styles.fileContainer}>
                  <AiFillFileText />
                  <a className={styles.file} href="google.com">
                    Prova-p1.pdf
                  </a>
                </li>
                <li className={styles.fileContainer}>
                  <AiFillFileText />
                  <a className={styles.file} href="google.com">
                    Prova-p1.pdf
                  </a>
                </li>
              </ul>
        }
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Disciplines;
