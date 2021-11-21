import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locacao } from 'src/assets/models/locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>('http://localhost:8080/exemplo-cadastro/webapi/locacao')
  }

  //POST
  inserir(locacao: Locacao): Observable<void> {
    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/locacao', locacao)
  }

  //PUT
  atualizar(locacao: Locacao): Observable<void> {
    return this.http.put<void>('http://localhost:8080/exemplo-cadastro/webapi/locacao', locacao)
  }

  //DELETE
  excluir(id: number): Observable<void> { 
    return this.http.request<void>('DELETE', 'http://localhost:8080/exemplo-cadastro/webapi/locacao', {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      body: { id: id }
  });
  }
}
