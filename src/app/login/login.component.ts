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
  showLoginError: boolean = false; // Variável para mostrar o erro de login

  constructor(private router: Router) {}

  login() {
    // Simule um serviço de login, verifique os dados e redirecione para a página de cliente se estiver correto.
    if (this.email === 'usuario@exemplo.com' && this.password === 'senha123') {
      this.router.navigate(['/cliente']);
    } else {
      this.showLoginError = true; // Mostra o erro de login
    }
  }
}
