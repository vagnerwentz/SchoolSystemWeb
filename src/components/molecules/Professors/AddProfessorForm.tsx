import { useState } from "react";
import { Button } from "../../atoms/Button";
import { InputField } from "../../atoms/InputField";

import styles from './css/AddProfessorForm.module.css';

type AddProfessorFormProps = {
    onSubmit: (name: string) => void;
}

export function AddProfessorForm({ onSubmit }: AddProfessorFormProps) {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name);
        setName('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputField
                id="professorName"
                label="Nome do Professor"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Button label="Adicionar Professor" />
        </form>
    );
};