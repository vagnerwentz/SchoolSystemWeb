import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

import './css/SubjectFeatures.css';

export function SubjectsFeature() {
  return (
    <div className="subjects-features-container">
      <h1>Matérias</h1>
      <div className="feature-boxes">
        <div className="feature-box">
          <Link to="/subject/register">
            <FaBook className="feature-icon" />
            <span>Registrar uma matéria</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
