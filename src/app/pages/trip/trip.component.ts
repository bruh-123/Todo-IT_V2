import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  formTrip: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formTrip = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      falla: ['', Validators.required],
      direccion: ['', Validators.required],
      fecha: ['', Validators.required],
      horario: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
