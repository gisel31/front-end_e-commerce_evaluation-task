import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UsuarioResponse } from 'src/app/interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiLogin = 'http://localhost:8080/api/login';
  private apiRegistro = 'http://localhost:8080/api/register';
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  isLogged() {
    return this.loggedIn$;
  } 

  login(email: string, password: string): Observable<UsuarioResponse | void>{
    const body = { email, password };
    
    return this.http.post<UsuarioResponse>(this.apiLogin, body).pipe(
      map((response: UsuarioResponse) => {
          this.loggedIn.next(true);
          this.saveToken(response.data.token);
          return response;
      })
    );
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('Rol');
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }

  private saveToken(token: string): void{
    localStorage.setItem('token', token);
  }

  registrarUsuario(username: string, email: string, password: string) {
    const body = { username, email, password };
    return this.http.post(this.apiRegistro, body);
  }
  
}

export { Router };