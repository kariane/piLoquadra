import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
    return this.http.request<void>('DELETE', 'http://localhost:8080/exemplo-cadastro/webapi/usuario', {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      body: { id: id }
  });
   
  }
}


