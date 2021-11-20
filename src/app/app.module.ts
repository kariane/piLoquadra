import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


import { HttpClientModule} from '@angular/common/http';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { EnderecoComponent } from './views/endereco/endereco.component';
import { LocacaoComponent } from './views/locacao/locacao.component';
import { LocadorComponent } from './views/locador/locador.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { QuadraComponent } from './views/quadra/quadra.component';
import { Relatorio1Component } from './views/relatorio1/relatorio1.component';
import { Relatorio2Component } from './views/relatorio2/relatorio2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EnderecoComponent,
    LocacaoComponent,
    LocadorComponent,
    PagamentoComponent,
    QuadraComponent,
    Relatorio1Component,
    Relatorio2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
