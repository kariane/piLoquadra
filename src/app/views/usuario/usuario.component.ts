import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/assets/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


//atributo variavel
usuarios = new Array<Usuario>();
columns = ['nome','email','celular','documentos','idEndereco'];
usuarioEdicao?: Usuario = undefined;
estaEditando = false;

constructor(private usuarioService: UsuarioService) { }

ngOnInit(): void {
  this.listarUsuarios();
}

//Listar Enderecos
listarUsuarios(): void{
  this.usuarioService.listar().subscribe(usuarios => {
    this.usuarios = usuarios;
  });
}

//Salvar
salvar(): void{
  if(this.usuarioEdicao == undefined){
    return;
  }
  if(!this.estaEditando){
  this.usuarioService.inserir(this.usuarioEdicao).subscribe(() => {
    this.listarUsuarios();
    this.cancelar();
  });
}else{
  this.usuarioService.atualizar(this.usuarioEdicao).subscribe(() =>{
    this.listarUsuarios();
    this.cancelar();
  });
  }
}
 //Novo Endereco
novouUsuario() {
  this.usuarioEdicao = new Usuario();
  this.estaEditando = false;
}
//Cancelar
cancelar() {
  this.usuarioEdicao = undefined;
  this.estaEditando = false;
}
//Selecionar Endereco
selecionarUsuario(usuario: Usuario) {
  this.usuarioEdicao = usuario;
  this.estaEditando = true;
}

//Excluir/Deletar
excluir(usuario: Usuario) {
  const resposta = confirm(` ${usuario.id} será excluido.`);
  if(resposta && usuario && usuario.id){
    this.usuarioService.excluir(usuario.id).subscribe(() => {
      this.listarUsuarios();
    });
  }
}

}


