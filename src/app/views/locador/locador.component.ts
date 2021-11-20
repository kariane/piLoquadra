import { Component, OnInit } from '@angular/core';
import { LocadorService } from 'src/app/services/locador.service';
import { Locador } from 'src/assets/models/locador';

@Component({
  selector: 'app-locador',
  templateUrl: './locador.component.html',
  styleUrls: ['./locador.component.css']
})
export class LocadorComponent implements OnInit {


//atributo variavel
locadores = new Array<Locador>();
columns = ['nome','email','celular','documento_cnpj','documento_cpf'];
locadorEdicao?: Locador = undefined;
estaEditando = false;

constructor(private locadorService: LocadorService) { }

ngOnInit(): void {
  this.listarLocador();
}

//Listar Enderecos
listarLocador(): void{
  this.locadorService.listar().subscribe(locadores => {
    this.locadores = locadores;
  });
}

//Salvar
salvar(): void{
  if(this.locadorEdicao == undefined){
    return;
  }
  if(!this.estaEditando){
  this.locadorService.inserir(this.locadorEdicao).subscribe(() => {
    this.listarLocador();
    this.cancelar();
  });
}else{
  this.locadorService.atualizar(this.locadorEdicao).subscribe(() =>{
    this.listarLocador();
    this.cancelar();
  });
  }
}
 //Novo Endereco
novoLocador() {
  this.locadorEdicao = new Locador();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.locadorEdicao = undefined;
  this.estaEditando = false;
}
//Selecionar Endereco
selecionarLocador(locador: Locador) {
  this.locadorEdicao = locador;
  this.estaEditando = true;
}

//Excluir/Deletar
excluir(locador: Locador) {
  const resposta = confirm(` ${locador.id} será excluido.`);
  if(resposta && locador && locador.id){
    this.locadorService.excluir(locador.id).subscribe(() => {
      this.listarLocador();
    });
  }
}

}

