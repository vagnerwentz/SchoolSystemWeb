import { useState } from 'react';
import { createStudent } from '../api/api';
import { StudentDTO } from '../models/StudentDTO';
import { PhotoUploader } from './atoms/PhotoUploader';

interface StudentFormProps {
    onAddStudent: (student: StudentDTO) => void;
}

function StudentForm({ onAddStudent }: StudentFormProps) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        const student: StudentDTO = {
            name: name,
            photo: photo || null,
        }
        
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Foto</label>
        <PhotoUploader onFileSelect={(file) => setPhoto(file)} />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default StudentForm;