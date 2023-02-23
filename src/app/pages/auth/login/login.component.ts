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
    document.body.style.backgroundImage = "url('assets/img/endalia-background.png')";


    this.initLoginForm();
  }


  initLoginForm() {
    this.loginForm = new FormGroup<ILoginForm>({
      username: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
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

  onSubmitLoginForm(form: SubmitEvent) {
    form.preventDefault();
    this.textButtonLogin = 'Loading...';
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.isLoadingData = true;
      setTimeout(() => {
        document.body.style.backgroundImage = '';
        this.router.navigate(['/employees/employees-list']);
        this.isLoadingData = false;
      }, 1500);
    } else {
      this.textButtonLogin = 'Acceder'
    }
  }

}
