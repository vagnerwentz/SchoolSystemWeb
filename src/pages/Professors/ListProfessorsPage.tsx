import { useEffect, useState } from "react";
import { GetAllProfessrosDto } from "../../models/Professor/GetAllProfessorsDto";
import { getAllProfessors } from "../../api/api";
import { ListProfessorsTemplate } from "../../components/templates/Professors/ListProfessorsTemplate";

export function ListProfessorsPage() {
    const [professors, setProfessors] = useState<GetAllProfessrosDto[]>([]);

    useEffect(() => {
        fetchProfessors();
    }, []);

    const fetchProfessors = async () => {
        try {
            const response = await getAllProfessors();
            console.log(response.data.data)
            setProfessors(response.data.data);
        } catch (error) {
            console.error('Erro ao obter os professores', error);
        }
    }

    return <ListProfessorsTemplate professors={professors} />;
}