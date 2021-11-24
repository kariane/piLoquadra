import { Component, OnInit } from '@angular/core';
import { QuadraService } from 'src/app/services/quadra.service';
import { Quadra } from 'src/assets/models/quadra';

@Component({
  selector: 'app-quadra',
  templateUrl: './quadra.component.html',
  styleUrls: ['./quadra.component.css']
})
export class QuadraComponent implements OnInit {


//atributo variavel
quadras = new Array<Quadra>();
columns = ['nomeQuadra','tipoQuadra','descricao','actions'];
quadraEdicao?: Quadra = undefined;
estaEditando = false;

constructor(private quadraService: QuadraService) { }

ngOnInit(): void {
  this.listarQuadra();
}

//Listar Quadra
listarQuadra(): void{
  this.quadraService.listar().subscribe(quadras => {
    this.quadras = quadras;
  });
}

//Salvar
salvar(): void{
  if(this.quadraEdicao == undefined){
    return;
  }
  if(!this.estaEditando){
  this.quadraService.inserir(this.quadraEdicao).subscribe(() => {
    this.listarQuadra();
    this.cancelar();
  });
}else{
  this.quadraService.atualizar(this.quadraEdicao).subscribe(() =>{
    this.listarQuadra();
    this.cancelar();
  });
  }
}
 //Novo Quadra
novoQuadra() {
  this.quadraEdicao = new Quadra();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.quadraEdicao = undefined;
  this.estaEditando = false;
}
//Selecionar Quadra
selecionarQuadra(quadra: Quadra) {
  this.quadraEdicao = quadra;
  this.estaEditando = true;
}

//Excluir/Deletar
excluir(quadra: Quadra) {
  const resposta = confirm(` ${quadra.id} será excluido.`);
  if(resposta && quadra && quadra.id){
    this.quadraService.excluir(quadra.id).subscribe(() => {
      this.listarQuadra();
    });
  }
}

}

