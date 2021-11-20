import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/assets/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/exemplo-cadastro/webapi/usuario')
  }

  //POST
  inserir(usuario: Usuario): Observable<void> {
    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/usuario', usuario)
  }

  //PUT
  atualizar(usuario: Usuario): Observable<void> {
    return this.http.put<void>('http://localhost:8080/exemplo-cadastro/webapi/usuario', usuario)
  }

  //DELETE
  excluir(id: number): Observable<void> {
    let parametro = new HttpParams();
    parametro = parametro.append('id', id);
    return this.http.delete<void>('http://localhost:8080/exemplo-cadastro/webapi/usuario', {params: parametro});
  }
}

