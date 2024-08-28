import { useState, useEffect } from 'react';
import { SelectField } from '../molecules/SelectField';
import { FormActions } from '../molecules/FormActions';
import styles from './EnrollmentForm.module.css';
import { enrollStudent, getAllStudents, getAllSubjects } from '../../api/api';
import { Student } from '../../models/Student';
import { Subject } from '../../models/Subject';
import { EnrollmentDTO } from '../../models/EnrollmentDTO';

export function EnrollmentForm() {
  const [students, setStudents] = useState<Student[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const [studentsResponse, subjectsResponse] = await Promise.all([
        getAllStudents(),
        getAllSubjects()
      ]);

      setStudents(studentsResponse.data.data);
      setSubjects(subjectsResponse.data.data);

      if (studentsResponse.data.data.length > 0) {
        setSelectedStudent(studentsResponse.data.data[0].id.toString());
      }
      if (subjectsResponse.data.data.length > 0) {
        setSelectedSubject(subjectsResponse.data.data[0].id.toString());
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const enrollment: EnrollmentDTO = {
      studentId: +selectedStudent,
      subjectId: +selectedSubject
    }
    
    await enrollStudent(enrollment);
  };

  return (
      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}>
        <SelectField
          label="Estudante"
          options={students.map((student) => ({ value: student.id, label: student.name }))}
          value={selectedStudent}
          onChange={setSelectedStudent}
          className={styles.selectField}
          classNameLabel={styles.label}
        />
        <SelectField
          label="Matéria"
          options={subjects.map((subject) => ({ value: subject.id, label: subject.name }))}
          value={selectedSubject}
          onChange={setSelectedSubject}
          className={styles.selectField}
          classNameLabel={styles.label}
        />
        <FormActions />
    </form>
  );
};
