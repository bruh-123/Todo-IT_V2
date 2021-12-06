import { Component } from '@angular/core';

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
  constructor() {}
}
