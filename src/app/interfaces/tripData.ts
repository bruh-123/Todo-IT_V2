export interface TripData {
  id?: number;
  fecha: Date;
  marca: string;
  modelo: string;
  estadoEquipo: string;
  estadoEnvio: string;
  entrega?: Date;
}
