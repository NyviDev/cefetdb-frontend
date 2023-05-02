export default interface DisciplineRepositorio {
  getDisciplinesBySemesters(semester: number): Promise<Record<string, any>>;
  getFilesFromDiscipline(nameDiscipline: string): Promise<Record<string, any>>;
  getAllDisciplines(): Promise<Record<string, any>>;
}
