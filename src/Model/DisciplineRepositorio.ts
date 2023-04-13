export default interface DisciplineRepositorio {
    getDisciplinesBySemesters(semester: number) : Promise<Record<string, any>>;
}