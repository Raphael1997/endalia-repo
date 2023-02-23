import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginForm } from 'src/app/shared/interfaces/ILoginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  loginForm!: FormGroup;
  textButtonLogin = 'Acceder';
  isLoadingData = false;
  formSubmitted = false;

  ngOnInit(): void {
    localStorage.clear();
    document.body.style.backgroundImage = "url('assets/img/endalia-background.png')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    this.initLoginForm();
  }


  initLoginForm() {
    this.loginForm = new FormGroup<ILoginForm>({
      username: new FormControl('angular@endalia.com', { nonNullable: true, validators: [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] }),
      password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    });
  }


  invalidField(field: string) {
    const control = this.loginForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched || this.formSubmitted);
  }

  validField(field: string) {
    const control = this.loginForm.get(field);
    return control?.valid || this.formSubmitted;
  }

  fieldTouched(field: string) {
    return this.loginForm.get(field)?.touched;
  }

  onSubmitLoginForm(ev: SubmitEvent) {
    ev.preventDefault();
    this.textButtonLogin = 'Loading...';
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.isLoadingData = true;
      setTimeout(() => {
        document.body.style.backgroundImage = '';
        this.router.navigate(['/employees/employees-list']);
        localStorage.setItem('userLog', 'Usuario logueado');
        this.isLoadingData = false;
      }, 1500);
    } else {
      this.textButtonLogin = 'Acceder'
    }
  }

}
