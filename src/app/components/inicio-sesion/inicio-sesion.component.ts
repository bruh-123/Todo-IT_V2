import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
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
  submitted = false;
  isLoading = false;
  loginform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validateService: ValidateUserService,
    private alert: AlertService
  ) {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  ingresar() {
    console.log(this.loginform.errors);

    this.submitted = true;

    if (this.loginform.invalid) {
      return;
    }
    this.isLoading = true;
    this.validateService
      .login(this.loginform.value.email, this.loginform.value.password)
      .subscribe(
        (resp) => {
          localStorage.setItem('userLoged', JSON.stringify(resp.email));
          localStorage.setItem('userName', JSON.stringify(resp.fullName));
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
