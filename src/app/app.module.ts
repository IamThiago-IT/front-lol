import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AppRoutingModule } from './app-routing.module';
import { AutocadastroComponent } from './autocadastro/autocadastro.component'; // Importe o AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    PedidoComponent,
    AutocadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule, // Adicione o AppRoutingModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
