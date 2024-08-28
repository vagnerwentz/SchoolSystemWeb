import { useEffect, useState } from 'react';
import { Student } from '../../models/Student';
import { getAllStudents } from '../../api/api';
import { ListStudentsTemplate } from '../../components/templates/Students/ListStudentsTemplate';

export function ListStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data.data);
    } catch (error) {
      console.error('Erro ao obter os estudantes', error);
    }
  };

  return <ListStudentsTemplate students={students}/>;
}
