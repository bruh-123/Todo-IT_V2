import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TripData } from 'src/app/interfaces/tripData';

const TRIP_DATA: TripData[] = [
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    fecha: new Date(2021, 3, 15),
    marca: 'Helium',
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
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {
  displayedColumns: string[] = [
    'fecha',
    'marca',
    'modelo',
    'estadoEquipo',
    'estadoEnvio',
  ];
  dataSource = new MatTableDataSource(TRIP_DATA);

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
