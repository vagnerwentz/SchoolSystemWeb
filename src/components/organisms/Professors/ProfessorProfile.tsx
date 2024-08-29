import { useState } from 'react';
import styles from './css/ProfessorProfile.module.css';
import Modal from 'react-modal';
import { InputField } from "../../atoms/InputField";
import { Button } from "../../atoms/Button";
import { SubjectPerformanceItem } from '../../molecules/SubjectPerformance/SubjectPerformanceItem';
import { StudentListItemAddGrade } from '../../molecules/Students/StudentListItemAddGrade';
import { SubjectsViewModel } from '../../../models/Professor/ViewModel/ProfessorProfileViewModel';
import { addStudentPerformance } from '../../../api/api';
import { AddStudentPerformance } from '../../../models/StudentPerformance/AddStudentPerformance';

interface ProfessorProfileProps {
    professorName: string;
    subjects: Array<SubjectsViewModel>;
}

export function ProfessorProfile({ professorName, subjects }: ProfessorProfileProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState<{ subjectId: number, subjectName: string} | null>(null);
    const [selectedStudent, setSelectedStudent] = useState<{ studentId: number, studentName: string} | null>(null);
    const [grade, setGrade] = useState<number | string>('');
    const [description, setDescription] = useState<string>('');

    const openModal = (subjectId: number, subjectName: string, studentId: number, studentName: string) => {
        setSelectedSubject({ subjectId, subjectName});
        setSelectedStudent({ studentId, studentName });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSubject(null);
        setSelectedStudent(null);
        setGrade('');
    };

    const handleSaveGrade = async () => {
        var addStudentPerformanceDto: AddStudentPerformance = {
            studentId: selectedStudent!.studentId.toString(),
            subjectId: selectedSubject!.subjectId.toString(),
            grade: +grade,
            description: description === '' ? null : description
        };
        await addStudentPerformance(addStudentPerformanceDto);
        window.location.reload();
        closeModal();
    };

    return (
        <div className={styles.professorProfile}>
            <h1>{professorName}</h1>
            {subjects.map(subject => (
                <div key={subject.subjectId} className={styles.subjectContainer}>
                    <SubjectPerformanceItem subjectName={subject.subjectName} averageGrade={subject.overallClassAverage} />
                    <ul className={styles.studentList}>
                        {subject.students.map(student => (
                            <StudentListItemAddGrade
                                key={student.studentId}
                                id={student.studentId}
                                name={student.studentName}
                                onAddGradeClick={() => openModal(
                                    subject.subjectId, 
                                    subject.subjectName, 
                                    student.studentId,
                                    student.studentName
                                )}
                            />
                        ))}
                    </ul>
                </div>
            ))}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <h2 className={styles.modalTitle}>Adicionar Nota</h2>
                <div className={styles.modalContent}>
                    <p><strong>Matéria </strong> {selectedSubject?.subjectName}</p>
                    <p><strong>Estudante </strong> {selectedStudent?.studentName}</p>
                    <InputField
                        id="grade"
                        label="Nota:"
                        type="number"
                        value={grade.toString()}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <InputField
                        id="description"
                        label="Descrição:"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.modalActions}>
                    <Button label="Salvar" onClick={handleSaveGrade} />
                    <Button label="Fechar" onClick={closeModal} />
                </div>
            </Modal>
        </div>
    );
}
