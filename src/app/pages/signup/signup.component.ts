import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  hide = true;
  isLoading = false;
  signupForm: FormGroup;
  constructor(
    private signupservice: SignUpService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      cellPhone: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.signupservice.save(this.signupForm.value).subscribe((resp) => {
      console.log(resp);
      this.signupForm.reset();
    });
    this.loadingTrucho();
  }

  loadingTrucho() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }
}
