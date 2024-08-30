import { useEffect, useState } from "react";
import { InputField } from "../../atoms/InputField";
import { Button } from "../../atoms/Button";

import { IAddSubjectDTO } from "../../../models/Subject/IAddSubjectDTO";
import { SelectField } from "../SelectField";
import { GetAllProfessorsDto } from "../../../models/Professor/GetAllProfessorsDto";

import styles from './AddSubjectForm.module.css';

type AddSubjectFormProps = {
    onSubmit: (addSubjectDTO: IAddSubjectDTO) => void;
    professors: GetAllProfessorsDto[];
}

export function AddSubjectForm({ onSubmit, professors }: AddSubjectFormProps) {
    const [code, setCode] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [selectedProfessor, setSelectedProfessor] = useState('');

    useEffect(() => {
        if(professors.length === 0) return;

        setSelectedProfessor(professors[0].id.toString());
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        var addSubject: IAddSubjectDTO = {
            code: code,
            name: subjectName,
            professorId: +selectedProfessor
        }
        onSubmit(addSubject);
        setSubjectName('');
        setCode('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {professors.length === 0 ? (
                (<strong>Não há professores registrados para atribuir a uma matéria</strong>)
            ) : (
                <div>
                    <InputField 
                        id="subjectName"
                        label="Matéria"
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                    />

                    <InputField 
                        id="code"
                        label="Código"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />

                    <SelectField 
                        label="Professor"
                        options={professors.map((professor => ({ value: professor.id, label: professor.name })))}
                        value={selectedProfessor}
                        onChange={setSelectedProfessor}
                        className={styles.selectedField}
                        classNameLabel={styles.label}
                    />

                    <Button label="Adicionar matéria" />
                </div>
            )}
            
        </form>
    )
}