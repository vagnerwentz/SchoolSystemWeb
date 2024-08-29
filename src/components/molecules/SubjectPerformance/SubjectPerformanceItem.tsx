import { Text } from "../../atoms/Text";
import styles from './css/SubjectPerformanceItem.module.css';

interface SubjectPerformanceItemProps {
    subjectName: string;
    averageGrade: number;
}

export function SubjectPerformanceItem({ subjectName, averageGrade }: SubjectPerformanceItemProps) {
    return (
        <div className={styles.subjectPerformanceItem}>
            <Text>{subjectName}</Text>
            <Text>Média Geral: {averageGrade.toFixed(2)}</Text>
        </div>
    );
}
