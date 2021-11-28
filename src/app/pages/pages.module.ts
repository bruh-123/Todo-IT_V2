import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TripComponent } from './trip/trip.component';
import { StateComponent } from './state/state.component';
import { RecordComponent } from './record/record.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    TripComponent,
    StateComponent,
    RecordComponent,
  ],
  imports: [CommonModule, ComponentsModule, MaterialModule,ReactiveFormsModule],
  exports:[ComponentsModule]
})
export class PagesModule {}
