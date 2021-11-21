import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoComponent } from './views/endereco/endereco.component';
import { LocacaoComponent } from './views/locacao/locacao.component';
import { LocadorComponent } from './views/locador/locador.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { QuadraComponent } from './views/quadra/quadra.component';
import { UsuarioComponent } from './views/usuario/usuario.component';

const routes: Routes = [
  { path: 'endereco', component: EnderecoComponent},
  { path: 'locacao', component: LocacaoComponent},
  { path: 'locador', component: LocadorComponent},
  { path: 'pagamento', component: PagamentoComponent},
  { path: 'quadra', component: QuadraComponent},
  { path: 'usuario', component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
