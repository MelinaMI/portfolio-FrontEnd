import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // hacer peticiones y CRUD

import { Observable } from 'rxjs'; // se suscribe a los datos que vienen del JSON y recibe respuesta asincrona

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //inyecta el httpClient en el constructor del servicio
  //http= alias
  constructor(private http:HttpClient) { } 
  //metodo Observable que devuelve datos
  getDatos():Observable<any> 
  {
    //retorno de datos utilizando el método get ed HttpClient que llama a la bd Json o a una URL
    return this.http.get('./assets/Json/datos.json');
  }
}
