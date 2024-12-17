import { useState } from 'react';

import { InputField } from '../../atoms/InputField';
import { Button } from '../../atoms/Button';
import styles from '../Students/css/StudentForm.module.css';
import { registerPlant } from '../../../api/api';
import { RegisterPlantDTO } from '../../../models/Plant/RegisterPlantDTO';

interface RegisterPlantFormProps {
  onRegisterPlant: (plant: RegisterPlantDTO) => void;
}

export function RegisterPlantForm({ onRegisterPlant }: RegisterPlantFormProps) {
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [maximumHumidity, setMaximumHumidity] = useState('');
  const [maximumTemperature, setMaximumTemperature] = useState('');
  const [minimumHumidity, setMinimumHumidity] = useState('');
  const [minimumTemperature, setMinimumTemperature] = useState('');
  const [idealSchedule, setIdealSchedule] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const plant: RegisterPlantDTO = {
        type,
        area,
        wateringConditionsDTO: {
            maximumHumidity,
            maximumTemperature,
            minimumHumidity,
            minimumTemperature,
            idealSchedule
        }
      };
      await registerPlant(plant);
      onRegisterPlant(plant);
    } catch (error) {
      console.error(error);
      alert('Falha ao tentar adicionar uma planta.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        label="Tipo da planta"
        classNameLabel={styles.name}
      />

    <InputField
        id="area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        label="Área"
        classNameLabel={styles.name}
      />

    <InputField
        id="minimumTemperature"
        value={minimumTemperature}
        onChange={(e) => setMinimumTemperature(e.target.value)}
        label="Temperatua miníma"
        classNameLabel={styles.name}
      />

    <InputField
        id="maximumHumidity"
        value={maximumHumidity}
        onChange={(e) => setMaximumHumidity(e.target.value)}
        label="Umidade máxima"
        classNameLabel={styles.name}
      />

    <InputField
        id="minimumHumidity"
        value={minimumHumidity}
        onChange={(e) => setMinimumHumidity(e.target.value)}
        label="Umidade mínima"
        classNameLabel={styles.name}
      />

    <InputField
        id="maximumTemperature"
        value={maximumTemperature}
        onChange={(e) => setMaximumTemperature(e.target.value)}
        label="Temp máxima"
        classNameLabel={styles.name}
      />

    <InputField
        id="idealSchedule"
        value={idealSchedule}
        onChange={(e) => setIdealSchedule(e.target.value)}
        label="Horário ideal"
        classNameLabel={styles.name}
      />
      <Button label="Registrar" />
    </form>
  );
}
