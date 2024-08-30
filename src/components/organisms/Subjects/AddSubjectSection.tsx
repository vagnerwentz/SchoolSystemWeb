import { GetAllProfessorsDto } from '../../../models/Professor/GetAllProfessorsDto';
import { IAddSubjectDTO } from '../../../models/Subject/IAddSubjectDTO';
import { AddSubjectForm } from '../../molecules/Subjects/AddSubjectForm';
import styles from './css/AddSubjectSection.module.css';

type AddSubjectSectionProps = {
    onAddSubject: (addSubjectDTO: IAddSubjectDTO) => void;
    professors: GetAllProfessorsDto[];
}

export function AddSubjectSection({ onAddSubject, professors }: AddSubjectSectionProps) {
    return (
        <section className={styles.section}>
            <AddSubjectForm onSubmit={onAddSubject} professors={professors} />
        </section>
    );
}