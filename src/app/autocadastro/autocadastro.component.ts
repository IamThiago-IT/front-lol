import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
})
export class AutocadastroComponent {
  cpf: string = '';
  nome: string = '';
  email: string = '';
  endereco: string = '';
  telefone: string = '';

  constructor(private router: Router) {}

  cadastrar() {
    // Simule um serviço de autocadastro, salve os dados (não implementado neste exemplo)
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']); // Redireciona para a página de login após o cadastro
  }
}
