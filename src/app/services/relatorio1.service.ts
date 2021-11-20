import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Relatorio1 } from 'src/assets/models/relatorio1';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Relatorio1[]> {
    return this.http.get<Relatorio1[]>('http://localhost:8080/exemplo-cadastro/webapi/relatorio')
  }
}

