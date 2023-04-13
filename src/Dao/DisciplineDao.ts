import DisciplineRepositorio from "../Model/DisciplineRepositorio";

export default class DisciplineDao implements DisciplineRepositorio {
  async getDisciplinesBySemesters(semester: number): Promise<Record<string, any>> {
    const response = await fetch(`http://localhost:80/api/semesters/${semester}/disciplines`);
    const data = await response.json();
    return data;
  }
//   async getAllDisciplines() {}
}
