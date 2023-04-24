import { createContext } from "react";
import { Discipline } from "../Model/Discipline";

export interface DisciplinesContextInterface {
  disciplines: Discipline[];
  setDisciplines: React.Dispatch<React.SetStateAction<Discipline[]>>;
}

export const DisciplinesContext = createContext<DisciplinesContextInterface>({
  disciplines: [],
  setDisciplines: () => null,
});
