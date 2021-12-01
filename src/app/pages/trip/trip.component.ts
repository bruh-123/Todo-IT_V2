import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelsService } from '../../services/travels.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent {
  formTrip: FormGroup;
  isLoading = false;
  userloged = localStorage.getItem('userLoged');
  userid = JSON.parse(localStorage.getItem('userID')!);

  constructor(
    private fb: FormBuilder,
    private travel: TravelsService,
    private alert: AlertService
  ) {
    this.formTrip = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      falla: ['', Validators.required],
    });
  }

  solicitarViaje(): void {
    this.isLoading = true;
    this.formTrip.value.id = this.userid;
    this.travel.solicitar(this.formTrip.value).subscribe(
      (resp) => {
        this.alert.success('Viaje solicitado!');
      },
      (error) => {
        console.log(error);
        console.log(error.error);

        this.alert.failure(error.error);
      }
    );
    this.formTrip.reset();
  }
}
