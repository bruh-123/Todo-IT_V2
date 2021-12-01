import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Equipo } from '../../interfaces/equipo';
import { TravelsService } from '../../services/travels.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent {
  dataSource: MatTableDataSource<Equipo>;
  equipos: Equipo[] = [];
  userid = JSON.parse(localStorage.getItem('userID')!);
  constructor(private viajes: TravelsService) {
    console.log(this.userid);

    this.viajes.estado(this.userid).subscribe((resp) => {
      this.equipos = resp;
      this.dataSource = new MatTableDataSource(this.equipos);
    });
    this.dataSource = new MatTableDataSource(this.equipos);
  }
  displayedColumns: string[] = [
    'fecha',
    'marca',
    'modelo',
    'estadoEquipo',
    'estadoEnvio',
    'entrega',
  ];

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
