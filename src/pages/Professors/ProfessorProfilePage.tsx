import { useEffect, useState } from "react";
import { ProfessorProfileTemplate } from "../../components/templates/Professors/ProfessorProfileTemplate";
import { useParams } from "react-router-dom";
import { getProfessorProfile } from "../../api/api";
import { ProfessorProfileViewModel } from "../../models/Professor/ViewModel/ProfessorProfileViewModel";

export function ProfessorProfilePage() {
    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [professorData, setProfessorData] = useState<ProfessorProfileViewModel | null>(null);

    useEffect(() => {
        fetchProfessorProfile();
    }, [id]);
    
    const fetchProfessorProfile = async () => {
        setIsLoading(true);
        try {
            const response = await getProfessorProfile(id!);
            console.log("response " + response.data.data);
            setProfessorData(response.data.data);
        } catch (error) {
            console.error("Failed to fetch professor profile:", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (isLoading) {
        return <strong>Carregando...</strong>;
    }

    if (!professorData) {
        return <div>Erro ao carregar dados do professor.</div>;
    }

    const { professorName, subjects } = professorData;

    return (
        <div>
            <ProfessorProfileTemplate 
                professorName={professorName} 
                subjects={subjects} 
            />
        </div>
    );
}
