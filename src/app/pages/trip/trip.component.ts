import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HistorialService } from '../../services/historial.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent{
  formTrip: FormGroup;
  constructor(private fb: FormBuilder, private historial: HistorialService) {
    this.formTrip = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      falla: ['', Validators.required],
    });
  }

  solicitarViaje():void {
    this.historial.solicitar(this.formTrip.value).subscribe(resp => {
      console.log(resp);
      this.formTrip.reset();
    })
  }
}
