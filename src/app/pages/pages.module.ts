import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HomeComponent, SignupComponent, LoginComponent],
  imports: [CommonModule, ComponentsModule, MaterialModule],
  exports:[ComponentsModule]
})
export class PagesModule {}
