import { Link } from "react-router-dom";
import styles from './css/ProfessorListItem.module.css';
import { Avatar } from "../../atoms/Avatar";
import { Text } from "../../atoms/Text";

interface ProfessorListItemProps {
    id: number;
    name: string;
    photo?: string | null;
}

export function ProfessorListItem({ id, name, photo }: ProfessorListItemProps) {
    return (
        <Link
            to={`/professor/${id}`}
            className={styles.professorItemLink}
            state={{ professorName: name }}
        >
            <li className={styles.professorItem}>
                <Avatar src={photo} alt={name} placeholder={name[0]} />
                <Text>{name}</Text>
            </li>
        </Link>
    );
}