import { User } from './users';

export interface Equipo {
  equipmentId: number;
  mark: string;
  model: string;
  failure: string;
  travelEquipmentDTOs: [
    {
      id: number;
      operationDate: string;
      observation: string;
      cadete: User;
      operator: User;
      equipment: string;
      statusTravel: number;
    }
  ];
}