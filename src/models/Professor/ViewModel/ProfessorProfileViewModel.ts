export interface ProfessorProfileViewModel {
    professorId: number;
    professorName: string;
    subjects: SubjectsViewModel[];
}

export interface SubjectsViewModel {
    subjectId: number;
    subjectName: string;
    overallClassAverage: number;
    students: StudentViewModel[];
}

export interface StudentViewModel {
    studentId: number;
    studentName: string;
}
