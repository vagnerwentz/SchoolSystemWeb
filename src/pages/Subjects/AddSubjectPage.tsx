import { useEffect, useState } from "react";
import { GetAllProfessorsDto } from "../../models/Professor/GetAllProfessorsDto";
import { IAddSubjectDTO } from "../../models/Subject/IAddSubjectDTO";
import { addSubject, getAllProfessors } from "../../api/api";
import { AddSubjectTemplate } from "../../components/templates/Subjects/AddSubjectTemplate";

export function AddSubjectPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [professors, setProfessors] = useState<GetAllProfessorsDto[]>([]);

    useEffect(() => {
        fetchProfessors();
    }, []);

    const fetchProfessors = async () => {
        try {
            const response = await getAllProfessors();
            setProfessors(response.data.data);
        } catch (error) {
            console.error('Erro ao obter os professores', error);
        } finally {
            setIsLoading(false);
        }
    }
    
    const handleAddSubject = async (addSubjectDTO: IAddSubjectDTO) => {
        await addSubject(addSubjectDTO);
    }

    return (
        <div>
            <h1>Registrar uma matéria</h1>
            {isLoading ? (
                <strong>Carregando...</strong>
            ) : (
                <AddSubjectTemplate onAddSubject={handleAddSubject} professors={professors} />
                )
            }
            
        </div>
    );
}