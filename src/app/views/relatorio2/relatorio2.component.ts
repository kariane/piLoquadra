import { Component, OnInit } from '@angular/core';
import { Relatorio2Service } from 'src/app/services/relatorio2.service';
import { Relatorio2 } from 'src/assets/models/relatorio2';

@Component({
  selector: 'app-relatorio2',
  templateUrl: './relatorio2.component.html',
  styleUrls: ['./relatorio2.component.css']
})
export class QuadraComponent implements OnInit {


//atributo variavel
relatorios2 = new Array<Relatorio2>();
columns = ['vquadra_min','vquadra_max'];
relatorio2Edicao?: Relatorio2 = undefined;
estaEditando = false;

constructor(private relatorio2Service: Relatorio2Service) { }

ngOnInit(): void {
  this.listarRelatorio2();
}

//Listar Enderecos
listarRelatorio2(): void{
  this.relatorio2Service.listar().subscribe(relatorios2 => {
    this.relatorios2 = relatorios2;
  });
}

//Salvar
salvar(): void{
  if(this.relatorio2Edicao == undefined){
    return;
  }
}
 //Novo Endereco
novoRelatorio2() {
  this.relatorio2Edicao = new Relatorio2();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.relatorio2Edicao = undefined;
  this.estaEditando = false;
}
//Selecionar Endereco
selecionarRelatorio2(relatorio2: Relatorio2) {
  this.relatorio2Edicao = relatorio2;
  this.estaEditando = true;
}

}
