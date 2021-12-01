import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TripData } from 'src/app/interfaces/tripData';
import { TravelsService } from '../../services/travels.service';

const TRIP_DATA: TripData[] = [
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Hydrogen',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Helium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
  {
    id: 1,
    falla: 'jajaja',
    // fecha: new Date(2021, 3, 15),
    marca: 'Lithium',
    modelo: 'zxrl8',
    estadoEquipo: 'Reparado',
    estadoEnvio: 'Retirado',
  },
];

const arr = [
  {
    equipmentId: 20,
    mark: 'samsung',
    model: 'galaxy a12',
    failure: 'pin de carga',
    travelEquipmentDTOs: [
      {
        id: 67,
        operationDate: '2021-11-30T16:23:05.0672256',
        observation: null,
        cadete: null,
        operator: {
          id: 34,
          email: 'bruno@gmail.com',
          fullName: 'Bruno Bruno',
          address: 'Esa 123',
          cellPhone: '56565656',
        },
        equipment: null,
        statusTravel: 1,
      },
    ],
  },
  {
    equipmentId: 21,
    mark: 'hp',
    model: 'Megas XLR',
    failure: 'Todo',
    travelEquipmentDTOs: [
      {
        id: 68,
        operationDate: '2021-11-30T16:53:44.3782262',
        observation: null,
        cadete: null,
        operator: {
          id: 34,
          email: 'bruno@gmail.com',
          fullName: 'Bruno Bruno',
          address: 'Esa 123',
          cellPhone: '56565656',
        },
        equipment: null,
        statusTravel: 1,
      },
    ],
  },
];
const orr: TripData[] = [];
for (let i = 0; i < arr.length;i++) {
  const data: TripData = {
    id: arr[i].equipmentId,
    marca: arr[i].mark,
    modelo: arr[i].model,
    falla: arr[i].failure,
    fecha: arr[i].travelEquipmentDTOs[-1].operationDate,
    estadoEquipo: arr[i].travelEquipmentDTOs[-1].statusTravel < 5 ? "A reparar" : "reparado",
    

  };
}
console.log('aca', orr);

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {
  userid = localStorage.getItem('userID');
  constructor(private viajes: TravelsService) {
    this.viajes.estado(this.userid).subscribe((resp) => {});
  }
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
