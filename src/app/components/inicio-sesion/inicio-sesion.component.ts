import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent {
  hide = true;
  isLoading = false;
  loginform: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginform = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  ingresar() {
    console.log(this.loginform);
    this.loadingTrucho();
  }

  loadingTrucho() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2000);
  }
}
