import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InitTsp } from '../Models/InitTsp';
@Injectable({
  providedIn: 'root'
})
export class OptimizadorRutasAGService {
  baseurl: string = 'http://localhost:8000/tsp';
  constructor(private http: HttpClient) { }

  postinit(InitTsp: InitTsp){
    return this.http.post(this.baseurl+'/',InitTsp)
  }

  metodoPrueba() {
    return 0;
  }
}
