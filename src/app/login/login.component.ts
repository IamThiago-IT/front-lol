import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'usuario@exemplo.com' && this.password === 'senha123') {
      this.router.navigate(['/cliente']);
    } else {
      alert('Login falhou. Verifique seus dados de login.');
    }
  }
}
