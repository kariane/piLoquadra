import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locador } from 'src/assets/models/locador';

@Injectable({
  providedIn: 'root'
})
export class LocadorService{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Locador[]> {
    return this.http.get<Locador[]>('http://localhost:8080/exemplo-cadastro/webapi/locador')
  }

  //POST
  inserir(locador: Locador): Observable<void> {
    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/locador', locador)
  }

  //PUT
  atualizar(locador: Locador): Observable<void> {
    return this.http.put<void>('http://localhost:8080/exemplo-cadastro/webapi/locador', locador)
  }

  //DELETE
  excluir(id: number): Observable<void> {
    let parametro = new HttpParams();
    parametro = parametro.append('id', id);
    return this.http.delete<void>('http://localhost:8080/exemplo-cadastro/webapi/locador', {params: parametro});
  }
}
