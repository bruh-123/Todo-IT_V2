import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FechaEntregaPipe } from '../Pipes/fecha-entrega.pipe';

@NgModule({
  declarations: [
    InicioSesionComponent,
    FooterComponent,
    HeaderComponent,
    FechaEntregaPipe,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
  exports: [
    InicioSesionComponent,
    FooterComponent,
    HeaderComponent,
    FechaEntregaPipe,
  ],
})
export class ComponentsModule {}
