import { Component, OnInit } from '@angular/core';

interface PecaRoupa {
  id: number;
  nome: string;
  preco: number;
  prazoLavagem: number;
}

@Component({
  selector: 'app-pecas-roupas',
  templateUrl: './pecas-roupas.component.html',
  styleUrls: ['./pecas-roupas.component.css'],
})
export class PecasRoupasComponent implements OnInit {
  pecas: PecaRoupa[] = [];
  novaPeca: PecaRoupa = { id: 0, nome: '', preco: 0, prazoLavagem: 0 };

  constructor() {}

  ngOnInit(): void {
    // Carregue as peças de roupas existentes, se necessário
  }

  adicionarPeca(): void {
    // Adicione a nova peça à lista de peças
    this.pecas.push(this.novaPeca);
    // Limpe os campos do formulário
    this.novaPeca = { id: 0, nome: '', preco: 0, prazoLavagem: 0 };
  }

  removerPeca(index: number): void {
    // Remova a peça da lista pelo índice
    this.pecas.splice(index, 1);
  }
}
