import { Component, OnInit } from '@angular/core';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { Pagamento } from 'src/assets/models/pagamento';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {


//atributo variavel
pagamentos = new Array<Pagamento>();
columns = ['tipoPagamento','actions'];
pagamentoEdicao?: Pagamento = undefined;
estaEditando = false;

constructor(private pagamentoService: PagamentoService) { }

ngOnInit(): void {
  this.listarPagamento();
}

//Listar Pagamentos
listarPagamento(): void{
  this.pagamentoService.listar().subscribe(pagamentos => {
    this.pagamentos = pagamentos;
  });
}

//Salvar
salvar(): void{
  if(this.pagamentoEdicao == undefined){
    return;
  }
  if(!this.estaEditando){
  this.pagamentoService.inserir(this.pagamentoEdicao).subscribe(() => {
    this.listarPagamento();
    this.cancelar();
  });
}else{
  this.pagamentoService.atualizar(this.pagamentoEdicao).subscribe(() =>{
    this.listarPagamento();
    this.cancelar();
  });
  }
}
 //Novo Pagamento
novoPagamento() {
  this.pagamentoEdicao = new Pagamento();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.pagamentoEdicao = undefined;
  this.estaEditando = false;
}
//Selecionar Endereco
selecionarPagamento(pagamento: Pagamento) {
  this.pagamentoEdicao = pagamento;
  this.estaEditando = true;
}

//Excluir/Deletar
excluir(pagamento: Pagamento) {
  const resposta = confirm(` ${pagamento.id} será excluido.`);
  if(resposta && pagamento && pagamento.id){
    this.pagamentoService.excluir(pagamento.id).subscribe(() => {
      this.listarPagamento();
    });
  }
}

}
