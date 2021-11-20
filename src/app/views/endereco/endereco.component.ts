import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Endereco } from 'src/assets/models/endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {


//atributo variavel
enderecos = new Array<Endereco>();
columns = ['logradouro','numero','complemento','bairro','cidade','estado','pais','cep','bairro','actions'];
enderecoEdicao?: Endereco = undefined;
estaEditando = false;

constructor(private enderecoService: EnderecoService) { }

ngOnInit(): void {
  this.listarEnderecos();
}

//Listar Enderecos
listarEnderecos(): void{
  this.enderecoService.listar().subscribe(enderecos => {
    this.enderecos = enderecos;
  });
}

//Salvar
salvar(): void{
  if(this.enderecoEdicao == undefined){
    return;
  }
  if(!this.estaEditando){
  this.enderecoService.inserir(this.enderecoEdicao).subscribe(() => {
    this.listarEnderecos();
    this.cancelar();
  });
}else{
  this.enderecoService.atualizar(this.enderecoEdicao).subscribe(() =>{
    this.listarEnderecos();
    this.cancelar();
  });
  }
}
 //Novo Endereco
novoEndereco() {
  this.enderecoEdicao = new Endereco();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.enderecoEdicao = undefined;
  this.estaEditando = false;
}
//Selecionar Endereco
selecionarEndereco(endereco: Endereco) {
  this.enderecoEdicao = endereco;
  this.estaEditando = true;
}

//Excluir/Deletar
excluir(endereco: Endereco) {
  const resposta = confirm(` ${endereco.id} será excluido.`);
  if(resposta && endereco && endereco.id){
    this.enderecoService.excluir(endereco.id).subscribe(() => {
      this.listarEnderecos();
    });
  }
}

}
