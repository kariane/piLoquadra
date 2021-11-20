import { Component, OnInit } from '@angular/core';
import { LocacaoService } from 'src/app/services/locacao.service';
import { Locacao } from 'src/assets/models/locacao';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent implements OnInit {


//atributo variavel
locacoes = new Array<Locacao>();
columns = ['idUsuario','idQuadra','idPagamento','data_hora_inicial','data_hora_final','valor','status_locacao'];
locacaoEdicao?: Locacao = undefined;
estaEditando = false;

constructor(private locacaoService: LocacaoService) { }

ngOnInit(): void {
  this.listarLocacao();
}

//Listar Enderecos
listarLocacao(): void{
  this.locacaoService.listar().subscribe(locacoes => {
    this.locacoes = locacoes;
  });
}


//Salvar
salvar(): void{
  if(this.locacaoEdicao == undefined){
    return;
  }
  if(!this.estaEditando){
  this.locacaoService.inserir(this.locacaoEdicao).subscribe(() => {
    this.listarLocacao();
    this.cancelar();
  });
}else{
  this.locacaoService.atualizar(this.locacaoEdicao).subscribe(() =>{
    this.listarLocacao();
    this.cancelar();
  });
  }
}
 //Novo Endereco
novoEndereco() {
  this.locacaoEdicao = new Locacao();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.locacaoEdicao = undefined;
  this.estaEditando = false;
}
//Selecionar Endereco
selecionarLocacao(locacao: Locacao) {
  this.locacaoEdicao = locacao;
  this.estaEditando = true;
}

//Excluir/Deletar
excluir(locacao: Locacao) {
  const resposta = confirm(` ${locacao.id} será excluido.`);
  if(resposta && locacao && locacao.id){
    this.locacaoService.excluir(locacao.id).subscribe(() => {
      this.listarLocacao();
    });
  }
}

}
