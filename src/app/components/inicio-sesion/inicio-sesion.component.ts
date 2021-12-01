import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateUserService } from '../../services/validate-user.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent {
  hide = true;
  isLoading = false;
  loginform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validateService: ValidateUserService,
    private alert: AlertService
  ) {
    this.loginform = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  ingresar() {
    this.isLoading = true;
    this.validateService
      .login(this.loginform.value.email, this.loginform.value.password)
      .subscribe(
        (resp) => {
          console.log(resp);
          localStorage.setItem('userLoged', JSON.stringify(resp.email));
          localStorage.setItem('userID', JSON.stringify(resp.id));
          this.router.navigate(['/home']);
        },
        (error) => {
          this.isLoading = false;
          this.alert.failure(error.error);
        }
      );
  }
}
