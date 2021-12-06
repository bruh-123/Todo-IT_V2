import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { TripComponent } from './pages/trip/trip.component';
import { StateComponent } from './pages/state/state.component';
import { RecordComponent } from './pages/record/record.component';
import { VigilanteGuard } from './guards/vigilante.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'trip',
    component: TripComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'state',
    component: StateComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'record',
    component: RecordComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
