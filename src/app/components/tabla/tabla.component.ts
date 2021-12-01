import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Equipo } from 'src/app/interfaces/equipo';
import { TravelsService } from '../../services/travels.service';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  dataSource: MatTableDataSource<Equipo>;
  equipos: Equipo[] = [];
  userid = JSON.parse(localStorage.getItem('userID')!);
  constructor(private viajes: TravelsService) {
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
  ];

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
