import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from 'src/assets/models/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>('http://localhost:8080/exemplo-cadastro/webapi/pagamento')
  }

  //POST
  inserir(pagamento: Pagamento): Observable<void> {
    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/pagamento', pagamento)
  }

  //PUT
  atualizar(pagamento: Pagamento): Observable<void> {
    return this.http.put<void>('http://localhost:8080/exemplo-cadastro/webapi/pagamento', pagamento)
  }

  //DELETE
  excluir(id: number): Observable<void> { 
    return this.http.request<void>('DELETE', 'http://localhost:8080/exemplo-cadastro/webapi/pagamento', {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      body: { id: id }
  });
   
  }
}
