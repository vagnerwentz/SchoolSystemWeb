interface RegisterWateringConditionsDTO {
    minimumTemperature: string;
    maximumTemperature: string;
    minimumHumidity: string;
    maximumHumidity: string;
    idealSchedule: string;    
}

export interface RegisterPlantDTO {
    type: string;
    area: string;
    wateringConditionsDTO: RegisterWateringConditionsDTO
}