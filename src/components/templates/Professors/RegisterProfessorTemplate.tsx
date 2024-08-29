
import { AddProfessorSection } from '../../organisms/Professors/AddProfessorSection';
import styles from './css/RegisterProfessorTemplate.module.css';

type AddProfessorTemplateProps = {
    onAddProfessor: (name: string) => void;
}

export function RegisterProfessorTemplate({ onAddProfessor }: AddProfessorTemplateProps) {
    return (
        <div className={styles.container}>
            <AddProfessorSection onAddProfessor={onAddProfessor} />
        </div>
    );
}