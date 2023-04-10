import React, {useState} from "react";

import styles from "./disciplines.module.scss";
import Discipline from "./components/Discipline";

interface MyPeriod {
  [index: number]: Object;
}
const Disciplines = () => {
  
  const periods: MyPeriod = {
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
    2: {
      "Programação Estruturada": [
        "prova-p1.pdf",
        "prova-p2.pdf",
        "prova-pf.pdf",
      ],
      "Fundamentos de Redes": ["prova-pf.pdf"],
      "Modelagem de Dados": ["prova-p2.pdf", "prova-pf.pdf"],
      "Engenharia de Requisitos": ["prova-p1.pdf"],
      "Cálculo": ["prova-p1.pdf", "prova-p2.pdf", "prova-pf.pdf"],
      "Metodologia da Pesquisa Científica": [],
    },
    3: {
      "Programação Orientada a Objetos": [
        "prova-p1.pdf",
        "prova-p2.pdf",
        "prova-pf.pdf",
      ],
      "Fundamentos da Web": ["prova-p1.pdf"],
      "Banco de Dados I": ["prova-p1.pdf"],
      "Álgebra Linear": [],
      "Algoritmos e Estrutura de Dados": [],
    },
    4: {
      "Programação de Aplicações Coorporativas": [
        "prova-p1.pdf",
        "prova-p2.pdf",
        "prova-pf.pdf",
      ],
      "Sistemas Operacionais": ["prova-p1.pdf"],
      "Banco de Dados II": ["prova-p1.pdf"],
      "Administração de Banco de Dados": [],
      "Engenharia de Software": [],
      "Análise e Projetos de Sistemas": ["prova-p2.pdf", "prova-pf.pdf"],
      "Algoritmos em Grafos": ["prova-p2.pdf", "prova-pf.pdf"],
    },
    5: {
      "Programação para Web": ["prova-p1.pdf"],
      "Administração de Redes": ["prova-p1.pdf"],
      "Probabilidade e Estatística": [],
      "Gestão do Conhecimento da Informação": [],
      "Qualidade de Software": ["prova-p2.pdf", "prova-pf.pdf"],
      "Projeto e Arquitetura de Software": ["prova-p2.pdf", "prova-pf.pdf"],
    },
    6: {
      "Programação Paralela e Concorrente": ["prova-p1.pdf"],
      "Segurança e Auditoria de Sistemas": ["prova-p1.pdf"],
      "Programação de Clientes Web": [],
      "Teste e Manutenção de Software": [],
      "Empreendedorismo Digital": ["prova-p2.pdf", "prova-pf.pdf"],
    },
    7: {
      "Gestão de Projetos de TI": ["prova-p1.pdf"],
      "Interação H/C": ["prova-p1.pdf"],
      "Tecnologias Sustentavéis": [],
      "Ética": [],
      "Projeto Integrador de Sistemas": ["prova-p2.pdf", "prova-pf.pdf"],
    },
    8: {
      "Governança de TI": ["prova-p1.pdf"],
      "Legislação e Prop. Intelectual": ["prova-p1.pdf"],
      "Economia": [],
    },
    0: {
      A: ["prova-p1.pdf"],
      B: ["prova-p1.pdf"],
      C: [],
    },
  };

  function toggleAccordion(i: number) {
    if (accordion === i) {
      return setAccordion(-1);
    }
    setAccordion(i);
  }

  const [accordion, setAccordion] = useState(-1);
  return (
    <ul className={styles.disciplines}>
      {Object.entries(periods[1]).map(([period, Disciplines], i) => {
        return (
          <Discipline
            period={period}
            disciplines={Disciplines}
            index={i}
            toggleAccordion={toggleAccordion}
            accordion={accordion}
          />
        );
      })}
    </ul>
  );
};

export default Disciplines;
