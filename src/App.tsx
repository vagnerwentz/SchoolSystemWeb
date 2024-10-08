import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css'
import RegisterStudent from './pages/Students/RegisterStudentPage';
import { Header } from './components/Header/Header';
import StudentsFeatures from './pages/StudentFeatures/StudentsFeatures';
import { ListStudentsPage } from './pages/Students/ListStudentsPage';
import { EnrollmentPage } from './pages/Enrollments/EnrollmentPage';
import { StudentPerformancePage } from './pages/StudentPerformances/StudentPerformancesPage';
import ProfessorsFeatures from './pages/ProfessorFeatures/ProfessorsFeatures';
import { ListProfessorsPage } from './pages/Professors/ListProfessorsPage';
import { ProfessorProfilePage } from './pages/Professors/ProfessorProfilePage';
import { RegisterProfessorPage } from './pages/Professors/RegisterProfessorPage';
import { SubjectsFeature } from './pages/SubjectFeatures/SubjectFeatures';
import { AddSubjectPage } from './pages/Subjects/AddSubjectPage';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/student/:id/performance" element={<StudentPerformancePage />} />
          
          <Route path="/students" element={<StudentsFeatures />} />
          <Route path="/students/register" element={<RegisterStudent />} />
          <Route path="/students/list" element={<ListStudentsPage />} />
          
          <Route path="/students/enroll" element={<EnrollmentPage />} />
          
          <Route path="/professor/register" element={<RegisterProfessorPage />} />
          <Route path="/professors" element={<ProfessorsFeatures />} />
          <Route path="/professors/list" element={<ListProfessorsPage />} />
          <Route path="/professor/:id" element={<ProfessorProfilePage />} />

          <Route path="/subjects" element={<SubjectsFeature />} />
          <Route path="/subject/register" element={<AddSubjectPage />} />
        </Routes>
      </Router>
  );
}

export default App;