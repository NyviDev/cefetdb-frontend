import { Discipline } from "../Model/Discipline";
import DisciplineRepositorio from "../Model/DisciplineRepositorio";
import { Exam } from "../Model/Exam";

export default class DisciplineDao implements DisciplineRepositorio {

  
  async getDisciplinesBySemesters(semester: number): Promise<Discipline[]> {
    const response = await fetch(
      `http://localhost:3500/api/semesters/${semester}/disciplines`
    );
    const data = await response.json();
    return data;
  }

  async getFilesFromDiscipline(nameDiscipline: string): Promise<Exam[]> {
    const response = await fetch(
      `http://localhost:3500/api/disciplines/${nameDiscipline}/files`
    );
    const data = await response.json();
    return data;
  }
    async getAllDisciplines(): Promise<Discipline[]>  {
      const response = await fetch(`http://localhost:3500/api/disciplines`);
      const data = await response.json();
      return data;
    }
}
