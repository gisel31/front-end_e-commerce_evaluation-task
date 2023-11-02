import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage!: string;
  successMessage!: string;
  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) { }

  email: string = '';
  password: string = '';

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response) {
        }
      },
      (error) => {
        if (error.status === 401) {
          this.errorMessage = 'La contraseña es incorrecta. Por favor, intente nuevamente.';
        } else if (error.status === 404) {
          this.errorMessage = 'El nombre de usuario no es válido.';
        } else {
          this.errorMessage = 'Ha ocurrido un error en el inicio de sesión. Por favor, intente nuevamente.';
        }
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
  closeErrorMessage() {
    this.errorMessage = '';
  }

}
