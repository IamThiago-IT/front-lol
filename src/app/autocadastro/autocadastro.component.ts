import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
})
export class AutocadastroComponent {
  // Propriedades do formulário de autocadastro
  cpf: string = '';
  nome: string = '';
  email: string = '';
  endereco: string = '';
  telefone: string = '';

  showCadastroError: boolean = false; // Adicione a propriedade showCadastroError aqui

  constructor(private router: Router) {}

  cadastrar() {
    // Simule o serviço de cadastro, verifique os dados e redirecione para a página de cliente se estiver correto.
    if (this.cpf && this.nome && this.email && this.endereco && this.telefone) {
      // Realize o cadastro aqui, por exemplo, salvar os dados no backend
      this.router.navigate(['/cliente']);
    } else {
      this.showCadastroError = true; // Mostra o erro de cadastro
    }
  }
}
