import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Relatorio2 } from 'src/assets/models/relatorio2';

@Injectable({
  providedIn: 'root'
})
export class Relatorio2Service{
  //injetar uma instancia 
  constructor(private http: HttpClient) { }

  //GET
  listar(): Observable<Relatorio2[]> {
    return this.http.get<Relatorio2[]>('http://localhost:8080/exemplo-cadastro/webapi/relatorio/relatorio2')
  }
}
