import { SubjectsViewModel } from '../../../models/Professor/ViewModel/ProfessorProfileViewModel';
import { ProfessorProfile } from '../../organisms/Professors/ProfessorProfile';
import styles from './css/ProfessorProfileTemplate.module.css';


interface ProfessorProfileTemplateProps {
    professorName: string;
    subjects: Array<SubjectsViewModel>;
}

export function ProfessorProfileTemplate({ professorName, subjects }: ProfessorProfileTemplateProps) {
    
    return (
        <div className={styles.templateContainer}>
            <main className={styles.mainContent}>
                <ProfessorProfile professorName={professorName} subjects={subjects} />
            </main>
        </div>
    );
}
