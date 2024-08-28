import axios from "axios";
import { StudentDTO } from "../models/StudentDTO";
import { Student } from "../models/Student";
import { ApiResponse } from "./ApiResponse";
import { Subject } from "../models/Subject";
import { EnrollmentDTO } from "../models/EnrollmentDTO";
import { StudentPerformance } from "../models/StudentPerformance";
import { AddStudentPerformance } from "../models/StudentPerformance/AddStudentPerformance";
import { GetAllProfessrosDto } from "../models/Professor/GetAllProfessorsDto";

const api = axios.create({
    baseURL: "http://localhost:5126"
});

export const createStudent = (student: StudentDTO) => api.post('/api/v1/students/create', student, {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
});

export const getAllStudents = () => api.get<ApiResponse<Student[]>>('/api/v1/students/list', {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
});

export const getAllSubjects = () => api.get<ApiResponse<Subject[]>>('/api/v1/subjects/list', {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
});

export const getAllProfessors = () => api.get<ApiResponse<GetAllProfessrosDto[]>>('/api/v1/professors/list', {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
});

export const enrollStudent = (enrollment: EnrollmentDTO) => api.post('/api/v1/enrollment/student', enrollment, {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
});

export const getStudentPerformance = (id: string | number) => api.get<ApiResponse<StudentPerformance>>(`/api/v1/student/performance/${id}`, {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
});

export const addStudentPerformance = (addStudentPerformance: AddStudentPerformance) => api.post(`/api/v1/student/performance/create`, addStudentPerformance, {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
});