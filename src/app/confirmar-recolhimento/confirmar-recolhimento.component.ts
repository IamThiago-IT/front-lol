import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-recolhimento',
  templateUrl: './confirmar-recolhimento.component.html',
  styleUrls: ['./confirmar-recolhimento.component.css']
})
export class ConfirmarRecolhimentoComponent implements OnInit {

  numeroPedido: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.numeroPedido = params['numero'];
    });
  }

  confirmarRecolhimento(): void {
    // Implemente a lógica para confirmar o recolhimento do pedido aqui
    // Atualize o estado do pedido para 'RECOLHIDO'
    alert(`Recolhimento do Pedido ${this.numeroPedido} confirmado com sucesso!`);
  }

}
