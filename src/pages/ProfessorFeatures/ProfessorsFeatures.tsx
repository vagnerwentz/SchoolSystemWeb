import { Link } from 'react-router-dom';
import { FaUserTie, FaListAlt } from 'react-icons/fa';
import './ProfessorsFeatures.css';

function ProfessorsFeatures() {
  return (
    <div className="professors-features-container">
      <h1>Professores</h1>
      <div className="feature-boxes">
        <div className="feature-box">
            <Link to="/professor/register">
                <FaUserTie className="feature-icon" />
                <span>Registrar um professor</span>
            </Link>
        </div>
        <div className="feature-box">
            <Link to="/professors/list">
            <FaListAlt className="feature-icon" />
            <span>Listar professores</span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfessorsFeatures;
