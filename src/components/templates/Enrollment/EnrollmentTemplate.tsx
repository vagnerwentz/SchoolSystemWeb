import { EnrollmentForm } from '../../organisms/EnrollmentForm';
import styles from './css/EnrollmentTemplate.module.css';

export function EnrollmentTemplate() {
  return (
    <div className={styles.container}>
      <h2>Matricular Estudante</h2>
      <EnrollmentForm />
    </div>
  );
};
