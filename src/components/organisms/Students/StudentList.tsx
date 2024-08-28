import { StudentListItem } from "../../molecules/Students/StudentListItem";
import styles from './css/StudentList.module.css';
import { Student } from '../../../models/Student';

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  return (
    <ul className={styles.studentsList}>
      {students.map(student => (
        <StudentListItem
          key={student.id}
          id={student.id}
          name={student.name}
          photo={student.photo}
        />
      ))}
    </ul>
  );
}
