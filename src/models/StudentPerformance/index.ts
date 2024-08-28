export interface StudentPerformance {
    studentId: string;
    subjectsPerformance: SubjectPerformances[]
}

export interface SubjectPerformances {
    subjectId: string;
    subjectName: string;
    grades: Grades[];
    finalGrade: number;
    comments?: string;
    performanceGraph?: string;
}

export interface Grades {
    grade: string;
    description: string;
    createdAt: string;
    changedAt: string;
}