import { GetAllProfessorsDto } from "../../../models/Professor/GetAllProfessorsDto";
import { IAddSubjectDTO } from "../../../models/Subject/IAddSubjectDTO";
import { AddSubjectSection } from "../../organisms/Subjects/AddSubjectSection";

import styles from './css/AddSubjectTemplate.module.css';

type AddSubjectTemplateProps = {
    onAddSubject: (addSubjectDTO: IAddSubjectDTO) => void;
    professors: GetAllProfessorsDto[]
}

export function AddSubjectTemplate({ onAddSubject, professors }: AddSubjectTemplateProps) {
    return (
        <div className={styles.container}>
            <AddSubjectSection onAddSubject={onAddSubject} professors={professors} />
        </div>
    )
}