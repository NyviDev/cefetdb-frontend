import { createContext } from "react";
import { Exam } from "../Model/Exam";

export interface ExamContextInterface {
  exam: Exam[];
  setExam: React.Dispatch<React.SetStateAction<Exam[]>>;
}

export const ExamContext = createContext<ExamContextInterface>({
  exam: [],
  setExam: () => null,
});
