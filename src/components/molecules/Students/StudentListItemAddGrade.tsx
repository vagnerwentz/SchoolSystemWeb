import { FaPlus } from 'react-icons/fa';
import { Text } from "../../atoms/Text";
import { IconButton } from '../../atoms/IconButton';

import styles from './css/StudentListItem.module.css';

interface StudentListItemAddGradeProps {
    id: number;
    name: string;
    onAddGradeClick: () => void;
}

export function StudentListItemAddGrade({ id, name, onAddGradeClick }: StudentListItemAddGradeProps) {
    return (
        <li className={styles.studentItem}>
            <Text>{name}</Text>
            <IconButton icon={<FaPlus />} onClick={onAddGradeClick} ariaLabel="Adicionar nota" />
        </li>
    );
}
