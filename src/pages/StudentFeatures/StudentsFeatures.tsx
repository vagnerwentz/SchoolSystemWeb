import { Link } from 'react-router-dom';
import { FaUserPlus, FaList, FaClipboardCheck } from 'react-icons/fa';
import './StudentsFeatures.css';

function StudentsFeatures() {
  return (
    <div className="students-features-container">
      <h1>Estudantes</h1>
      <div className="feature-boxes">
        <div className="feature-box">
          <Link to="/students/register">
            <FaUserPlus className="feature-icon" />
            <span>Registrar um estudante</span>
          </Link>
        </div>
        <div className="feature-box">
          <Link to="/students/list">
            <FaList className="feature-icon" />
            <span>Listar estudantes</span>
          </Link>
        </div>
        <div className="feature-box">
          <Link to="/students/enroll">
            <FaClipboardCheck className="feature-icon" />
            <span>Matricular um estudante</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentsFeatures;
