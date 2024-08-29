import styles from './css/ProfessorsList.module.css';
import { GetAllProfessorsDto } from "../../../models/Professor/GetAllProfessorsDto";
import { ProfessorListItem } from '../../molecules/Professors/ProfessorListItem';

interface ProfessorsListProps {
  professors: GetAllProfessorsDto[];
}

export function ProfessorsList({ professors }: ProfessorsListProps) {
  return (
    <ul className={styles.professorsList}>
      {professors.map(professor => (
        <ProfessorListItem
          key={professor.id}
          id={professor.id}
          name={professor.name}
          photo={professor.photo}
        />
      ))}
    </ul>
  );
}
