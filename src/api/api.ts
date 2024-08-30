import axios from "axios";
import { StudentDTO } from "../models/StudentDTO";
import { Student } from "../models/Student";
import { ApiResponse } from "./ApiResponse";
import { Subject } from "../models/Subject";
import { EnrollmentDTO } from "../models/EnrollmentDTO";
import { StudentPerformance } from "../models/StudentPerformance";
import { AddStudentPerformance } from "../models/StudentPerformance/AddStudentPerformance";
import { GetAllProfessorsDto } from "../models/Professor/GetAllProfessorsDto";
import { ProfessorProfileViewModel } from "../models/Professor/ViewModel/ProfessorProfileViewModel";
import { RegisterProfessorDTO } from "../models/Professor/RegisterProfessorDTO";
import { IAddSubjectDTO } from "../models/Subject/IAddSubjectDTO";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5126"
});

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Type": "application/json"
};

const get = async <T>(url: string) => {
    try {
        return await api.get<ApiResponse<T>>(url, { headers });
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error);
        throw error;
    }
};

const post = async <T>(url: string, data: T) => {
    try {
        return await api.post(url, data, { headers });
    } catch (error) {
        console.error(`Failed to post to ${url}:`, error);
        throw error;
    }
};

export const createStudent = (student: StudentDTO) => post('/api/v1/students/create', student);
export const registerProfessor = (professor: RegisterProfessorDTO) => post('/api/v1/professors/create', professor);
export const addSubject = (subject: IAddSubjectDTO) => post('/api/v1/subjects/create', subject);
export const getAllStudents = () => get<Student[]>('/api/v1/students/list');
export const getAllSubjects = () => get<Subject[]>('/api/v1/subjects/list');
export const getAllProfessors = () => get<GetAllProfessorsDto[]>('/api/v1/professors/list');
export const enrollStudent = (enrollment: EnrollmentDTO) => post('/api/v1/enrollment/student', enrollment);
export const getStudentPerformance = (id: string | number) => get<StudentPerformance>(`/api/v1/student/performance/${id}`);
export const addStudentPerformance = (addStudentPerformance: AddStudentPerformance) => post(`/api/v1/student/performance/create`, addStudentPerformance);
export const getProfessorProfile = (id: string) => get<ProfessorProfileViewModel>(`/api/v1/professors/profile/${id}`);
