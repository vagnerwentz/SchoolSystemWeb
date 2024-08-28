import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
          <nav>
            <ul className={styles.navLinks}>
              <li>
                <Link to="/students">Estudantes</Link>
              </li>
              <li>
                <Link to="/professors">Professores</Link>
              </li>
              <li>
                <Link to="/">Matérias</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
}