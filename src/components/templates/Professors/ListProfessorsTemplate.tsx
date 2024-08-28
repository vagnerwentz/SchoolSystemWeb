import { GetAllProfessrosDto } from "../../../models/Professor/GetAllProfessorsDto";
import { ProfessorsList } from "../../organisms/Professors/ProfessorsList";
import styles from './css/ListProfessorsTemplate.module.css'

interface ListProfessorsTemplate {
    professors: GetAllProfessrosDto[]
}

export function ListProfessorsTemplate({ professors }: ListProfessorsTemplate) {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Professores registrados</h2>
            <ProfessorsList professors={professors} />
        </div>
    );
}