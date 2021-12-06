export interface TravelData {
  id?: number;
  fecha: string;
  marca: string|null;
  modelo: string|null;
  falla: string;
  estadoEquipo: string | number;
  estadoEnvio: string | number;
  entrega: string;
}
