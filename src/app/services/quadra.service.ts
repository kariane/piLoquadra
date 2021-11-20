import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quadra } from 'src/assets/models/quadra';

@Injectable({
  providedIn: 'root'
})
export class QuadraService{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Quadra[]> {
    return this.http.get<Quadra[]>('http://localhost:8080/exemplo-cadastro/webapi/quadra')
  }

  //POST
  inserir(quadra: Quadra): Observable<void> {
    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/quadra', quadra)
  }

  //PUT
  atualizar(quadra: Quadra): Observable<void> {
    return this.http.put<void>('http://localhost:8080/exemplo-cadastro/webapi/quadra', quadra)
  }

  //DELETE
  excluir(id: number): Observable<void> {
    let parametro = new HttpParams();
    parametro = parametro.append('id', id);
    return this.http.delete<void>('http://localhost:8080/exemplo-cadastro/webapi/quadra', {params: parametro});
  }
}
