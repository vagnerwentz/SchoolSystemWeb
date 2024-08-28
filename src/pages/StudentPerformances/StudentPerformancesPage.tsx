import { StudentPerformance, SubjectPerformances } from '../../models/StudentPerformance';
import { Chart } from 'react-chartjs-2';
import ChartAuto from 'chart.js/auto';
import { format } from 'date-fns';
import Modal from 'react-modal';
import { CategoryScale } from 'chart.js';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addStudentPerformance, getStudentPerformance } from '../../api/api';
import styles from './css/StudentPerformancesPage.module.css';
import { AddStudentPerformance } from '../../models/StudentPerformance/AddStudentPerformance';
import { Button } from '../../components/atoms/Button';
import { InputField } from '../../components/atoms/InputField';

Modal.setAppElement('#root');

export function StudentPerformancePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedSubjectName, setSubjectName] = useState<string | null>(null);
  
  const [newGrade, setNewGrade] = useState<number | string>('');
  const [newDescription, setNewDescription] = useState('');
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const studentName = location.state?.studentName;
  const [performanceData, setPerformanceData] = useState<StudentPerformance | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  ChartAuto.register(CategoryScale);

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetchStudentPerformance(id);
    }
  }, [id]);

  const openModal = (subjectId: string, subjectName: string) => {
    setSelectedSubjectId(subjectId);
    setSubjectName(subjectName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSubjectId(null);
    setNewGrade('');
    setNewDescription('');
  };

  const handleAddGrade = async () => {
    if (selectedSubjectId) {
      const studentPerformanceToBeCreated: AddStudentPerformance = {
          subjectId: selectedSubjectId,
          studentId: id!,
          description: newDescription === '' ? null : newDescription,
          grade: +newGrade!

      }

      await addStudentPerformance(studentPerformanceToBeCreated);
      await fetchStudentPerformance(id!);
      closeModal();
    }
  };

  const fetchStudentPerformance = async (studentId: string) => {
    setLoading(true);
    try {
      const response = await getStudentPerformance(studentId);
      setPerformanceData(response.data.data);
    } catch (error) {
      console.error('Failed to fetch student performance:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateChartData = (subject: SubjectPerformances) => ({
    labels: subject.grades.map(grade => grade.description + " " + format(new Date(grade.createdAt), 'dd/MM/yyyy')),
    datasets: [
      {
        label: `Notas de ${subject.subjectName}`,
        data: subject.grades.map(grade => parseFloat(grade.grade)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Desempenho de {studentName}</h1>
      
      {loading ? (
        <strong className={styles.loading}>Loading...</strong>
      ) : (
        performanceData?.subjectsPerformance.map(subject => (
          <div key={subject.subjectId} className={styles.subjectContainer}>
            <h2 className={styles.subjectTitle}>Matéria: {subject.subjectName}</h2>
  
            <div className={styles.chartContainer}>
              <Chart type="line" data={generateChartData(subject)} />
            </div>
  
            <div className={styles.detailsContainer}>
              <div className={styles.detailsAndFinalGrade}>
                <h3 className={styles.subtitle}>Detalhes</h3>
                <h3 className={`${styles.subtitle} ${
                  subject.finalGrade >= 6.0 ? styles.success : styles.fail
                }`}>
                  Média final {subject.finalGrade}
                </h3>
              </div>  
              <ul className={styles.gradesList}>
                {subject.grades.map((grade, index) => (
                  <li key={index} className={styles.gradeItem}>
                    Nota: {grade.grade} - {grade.description} - {format(new Date(grade.createdAt), 'dd/MM/yyyy')}
                  </li>
                ))}
              </ul>

              <Button label='Adicionar nota' onClick={() => openModal(subject.subjectId, subject.subjectName)} />
            </div>
          </div>
        ))
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Adicionar Nota"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Adicionar nota para a matéria {selectedSubjectName}</h2>
        <form>
          <InputField 
            id="grade"
            value={newGrade.toString()}
            onChange={(e) => setNewGrade((+e.target.value))} 
            label="Nota"
            classNameLabel={styles.inputGradeFieldLabel}
            type="number"
          />
          
          <InputField 
            id="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            label="Descrição"
            classNameLabel={styles.inputDescriptionFieldLabel}
          />
          
          <Button label='Adicionar' onClick={handleAddGrade} />
          <Button label='Fechar' onClick={closeModal} />
        </form>
      </Modal>
    </div>
  );
}
