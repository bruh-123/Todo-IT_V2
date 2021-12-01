import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    InicioSesionComponent,
    FooterComponent,
    HeaderComponent,
    TablaComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
  exports: [
    InicioSesionComponent,
    FooterComponent,
    HeaderComponent,
    TablaComponent,
  ],
})
export class ComponentsModule {}
