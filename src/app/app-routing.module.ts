import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota padrão redireciona para o login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
