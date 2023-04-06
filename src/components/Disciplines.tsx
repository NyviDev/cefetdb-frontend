import React, {useState} from "react";

import styles from "./disciplines.module.scss";
import Discipline from "./Discipline";

const Disciplines = () => {
  const periods = {
    1: {
      "Construção de Algoritmos": [
        "prova-p1.pdf",
        "prova-p2.pdf",
        "prova-pf.pdf",
      ],
      "Arquitetura de Computadores": [],
      "Fundamentos de Administração": [
        "prova-p1.pdf",
        "prova-p2.pdf",
        "prova-pf.pdf",
      ],
      "Gestão de Processos de Negócios": [
        "prova-p1.pdf",
        "prova-p2.pdf",
        "prova-pf.pdf",
      ],
      "Fundamentos da Matemática": [],
      "Matemática Discreta": ["prova-p1.pdf", "prova-p2.pdf", "prova-pf.pdf"],
      "Fundamentos de SI": [],
    },
    // 2: {
    //   "Programação Estruturada" = [],
    //   "Fundamentos de Redes",
    //   "Modelagem de Dados",
    //   "Engenharia de Requisitos",
    //   "Cálculo",
    //   "Metodologia da Pesquisa Científica",
    // },
    // 3: [
    //   "Programação Orientada a Objetos",
    //   "Fundamentos da Web",
    //   "Banco de Dados I",
    //   "Álgebra Linear",
    //   "Algoritmos e Estrutura de Dados",
    // ],
    // 4: [
    //   "Programação de Aplicações Coorporativas",
    //   "Sistemas Operacionais",
    //   "Banco de Dados II",
    //   "Administração de Banco de Dados",
    //   "Engenharia de Software",
    //   "Análise e Projetos de Sistemas",
    //   "Algoritmos em Grafos",
    // ],
    // 5: [
    //   "Programação para Web",
    //   "Administração de Redes",
    //   "Probabilidade e Estatística",
    //   "Gestão do Conhecimento da Informação",
    //   "Qualidade de Software",
    //   "Projeto e Arquitetura de Software",
    // ],
    // 6: [
    //   "Programação Paralela e Concorrente",
    //   "Segurança e Auditoria de Sistemas",
    //   "Programação de Clientes Web",
    //   "Teste e Manutenção de Software",
    //   "Empreendedorismo Digital",
    // ],
    // 7: [
    //   "Gestão de Projetos de TI",
    //   "Interação H/C",
    //   "Tecnologias Sustentavéis",
    //   "Ética",
    //   "Projeto Integrador de Sistemas",
    // ],
    // 8: ["Governança de TI", "Legislação e Prop. Intelectual", "Economia"],
  };

  function toggleAccordion(i: number) {
    if(accordion === i) {
      return setAccordion(-1);
    }
    setAccordion(i);
  }

  const [accordion, setAccordion] = useState(-1);

  return (
    <ul className={styles.disciplines}>
      {Object.entries(periods[1]).map(([period, Disciplines], i) => {
        return (
          <Discipline period={period} disciplines={Disciplines} index={i} toggleAccordion={toggleAccordion} accordion={accordion} />
        );
      })}
    </ul>
  );
};

export default Disciplines;
