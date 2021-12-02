import { User } from './users';
export interface Dto {
  id: number;
  operationDate: string;
  observation: string;
  cadete: User;
  operator: User;
  equipment?: string;
  statusTravel: number;
}
