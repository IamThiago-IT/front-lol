import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'; // Importação correta

@Component({
  selector: 'app-relatorio-receitas',
  templateUrl: './relatorio-receitas.component.html',
  styleUrls: ['./relatorio-receitas.component.css'],
})
export class RelatorioReceitasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  gerarRelatorio(): void {
    const doc = new jsPDF();
    doc.text('Relatório de Receitas', 10, 10);

    // Implemente aqui a lógica para obter os dados de receitas e formatá-los no PDF

    doc.save('relatorio_receitas.pdf');
  }
}
