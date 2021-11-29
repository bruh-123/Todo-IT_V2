import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TripData } from 'src/app/interfaces/tripData';

const TRIP_DATA: TripData[] = [
  
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  
];
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent {
  displayedColumns: string[] = [
    'fecha',
    'marca',
    'modelo',
    'estadoEquipo',
    'estadoEnvio',
    'entrega',
  ];
  dataSource = new MatTableDataSource(TRIP_DATA);

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
