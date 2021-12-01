export interface TripData {
  id?: number;
  fecha?: string;
  marca: string;
  modelo: string;
  falla: string;
  estadoEquipo?: string;
  estadoEnvio?: string;
  entrega?: Date;
}
