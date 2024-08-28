import { StudentList } from '../../organisms//Students/StudentList';
import styles from './css/ListStudentsTemplate.module.css';
import { Student } from '../../../models/Student';

interface ListStudentsTemplateProps {
  students: Student[];
}

export function ListStudentsTemplate({ students }: ListStudentsTemplateProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Estudantes registrados</h2>
      <StudentList students={students} />
    </div>
  );
}
