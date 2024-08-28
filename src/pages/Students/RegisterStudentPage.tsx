import '../Students.css';
import { StudentDTO } from '../../models/StudentDTO';
import { StudentForm } from '../../components/molecules/Students/StudentForm';

function RegisterStudentPage() {

  const handleAddStudent = async (student: StudentDTO) => {
    
  };

  return (
    <div className="students-container">
      <h1>Registrar um estudante</h1>
      <StudentForm onAddStudent={handleAddStudent}/>
    </div>
  );
}

export default RegisterStudentPage;