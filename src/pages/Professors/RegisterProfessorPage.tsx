import { registerProfessor } from "../../api/api";

import { RegisterProfessorDTO } from "../../models/Professor/RegisterProfessorDTO";
import { RegisterProfessorTemplate } from "../../components/templates/Professors/RegisterProfessorTemplate";

export function RegisterProfessorPage() {
    const handleAddProfessor = async (name: string) => {
        const professor: RegisterProfessorDTO =  {
            name: name,
        };
        await registerProfessor(professor);
    };

    return (
        <div>
            <h1>Registrar um professor</h1>
            <RegisterProfessorTemplate onAddProfessor={handleAddProfessor}/>
        </div>
    );
}