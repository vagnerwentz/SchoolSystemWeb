import { AddProfessorForm } from "../../molecules/Professors/AddProfessorForm";
import styles from './css/AddProfessorSection.module.css'

type AddProfessorSectionProps = {
    onAddProfessor: (name: string) => void;
}

export function AddProfessorSection({ onAddProfessor }: AddProfessorSectionProps) {
    return (
        <section className={styles.section}>
            <h2 className={styles.header}>Adicionar Novo Professor</h2>
            <AddProfessorForm onSubmit={onAddProfessor} />
        </section>
    );
}