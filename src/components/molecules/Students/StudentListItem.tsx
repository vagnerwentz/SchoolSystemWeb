import { Link } from "react-router-dom";
import { FaChartLine } from 'react-icons/fa';

import styles from './css/StudentListItem.module.css';
import { Avatar } from "../../atoms/Avatar";
import { Text } from "../../atoms/Text";

interface StudentListItemProps {
    id: number;
    name: string;
    photo?: string | null;
}

export function StudentListItem({ id, name, photo }: StudentListItemProps) {
    return (
        <Link
            to={`/student/${id}/performance`}
            className={styles.studentItemLink}
            state={{ studentName: name }}
        >
            <li className={styles.studentItem}>
                <div className={styles.studentInfo}>
                        <Avatar src={photo} alt={name} placeholder={name[0]} />
                        <Text className={styles.studentName}>{name}</Text>
                </div>
                <div className={styles.viewPerformance}>
                    <FaChartLine className={styles.performanceIcon} />
                    <span className={styles.performanceText}>Ver Performance</span>
                </div>
            </li>
        </Link>
    );
}