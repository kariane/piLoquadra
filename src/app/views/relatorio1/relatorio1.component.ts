import { Component, OnInit } from '@angular/core';
import { RelatorioService } from 'src/app/services/relatorio1.service';
import { Relatorio1 } from 'src/assets/models/relatorio1';

@Component({
  selector: 'app-relatorio1',
  templateUrl: './relatorio1.component.html',
  styleUrls: ['./relatorio1.component.css']
})
export class QuadraComponent implements OnInit {


//atributo variavel
relatorios1 = new Array<Relatorio1>();
columns = ['nome','nomeQuadra','tipoQuadra','valor','statusLocacao'];
relatorio1Edicao?: Relatorio1 = undefined;
estaEditando = false;

constructor(private relatorioService: RelatorioService) { }

ngOnInit(): void {
  this.listarRelatorio1();
}

//Listar Enderecos
listarRelatorio1(): void{
  this.relatorioService.listar().subscribe(relatorios1 => {
    this.relatorios1 = relatorios1;
  });
}

//Salvar
salvar(): void{
  if(this.relatorio1Edicao == undefined){
    return;
  }
}
 //Novo Endereco
novoRelatorio1() {
  this.relatorio1Edicao = new Relatorio1();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.relatorio1Edicao = undefined;
  this.estaEditando = false;
}
//Selecionar Endereco
selecionarRelatorio1(relatorio1: Relatorio1) {
  this.relatorio1Edicao = relatorio1;
  this.estaEditando = true;
}

}


