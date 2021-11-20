import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from 'src/assets/models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>('http://localhost:8080/exemplo-cadastro/webapi/endereco')
  }

  //POST
  inserir(endereco: Endereco): Observable<void> {
    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/endereco', endereco)
  }

  //PUT
  atualizar(endereco: Endereco): Observable<void> {
    return this.http.put<void>('http://localhost:8080/exemplo-cadastro/webapi/endereco', endereco)
  }

  //DELETE
  excluir(id: number): Observable<void> { 
    return this.http.request<void>('DELETE', 'http://localhost:8080/exemplo-cadastro/webapi/endereco', {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      body: { id: id }
  });
   
  }
}
