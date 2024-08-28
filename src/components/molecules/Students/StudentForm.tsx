import { useState } from 'react';

import { StudentDTO } from '../../../models/StudentDTO';
import { InputField } from '../../atoms/InputField';
import { Button } from '../../atoms/Button';
import styles from './css/StudentForm.module.css';
import { createStudent } from '../../../api/api';
import { PhotoUploader } from '../../atoms/PhotoUploader';
import { Label } from '../../atoms/Label';

interface StudentFormProps {
  onAddStudent: (student: StudentDTO) => void;
}

export function StudentForm({ onAddStudent }: StudentFormProps) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const student: StudentDTO = {
        name: name,
        photo: photo || null,
      };
      
      await createStudent(student);
      onAddStudent(student);
      setName('');
      setPhoto(null);
    } catch (error) {
      console.error(error);
      alert('Falha ao tentar adicionar um aluno.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Nome"
        classNameLabel={styles.name}
      />
      <div className={styles.photoUploaderContainer}>
        <Label text="Foto" htmlFor="photo" />
        <PhotoUploader onFileSelect={(file) => setPhoto(file)} />
      </div>
      <Button label="Registrar" />
    </form>
  );
}
