import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Verifique se este import está correto

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ClienteComponent,
    PedidoComponent,
    AutocadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Certifique-se de que AppRoutingModule está incluído aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
