import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit{
  displayedColumns: string[] = [
    'fecha',
    'marca',
    'modelo',
    'estadoEquipo',
    'estadoEnvio',
    'entrega'
  ];
  constructor() {}
  
  ngOnInit() {}
}
