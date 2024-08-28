export interface AddStudentPerformance {
    studentId: string;
    subjectId: string;
    grade: number;
    description?: string | null;
}