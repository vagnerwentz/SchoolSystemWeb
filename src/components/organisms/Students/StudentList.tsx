import { StudentListItem } from "../../molecules/Students/StudentListItem";
import styles from './css/StudentList.module.css';
import { Student } from '../../../models/Student';

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  return (
    <ul className={styles.studentsList}>
      {students.length === 0 ? (<strong>Não há informações de estudantes ou matérias para realizar matrícula</strong>) : (
        <div>
          {students.map(student => (
            <StudentListItem
              key={student.id}
              id={student.id}
              name={student.name}
              photo={student.photo}
            />
          ))}
        </div>
      )}
      
    </ul>
  );
}
