import { Injectable } from '@angular/core';
import { Vehiculo } from './../modelo/Vehiculo';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tiquete } from '../modelo/Tiquete';



@Injectable({
  providedIn: 'root'
})

export class ServicioParqueaderoService {

  placa: Text;
  private url = 'http://localhost:8580/parqueadero';
  private urlPut = 'http://localhost:8580/parqueadero/registrarSalida/';


  constructor(private http : HttpClient) { }


  registrarIngresoDelVehiculoAlPaqueadero(vehiculo: Vehiculo): Observable <Object>  {
    return this.http.post(this.url, vehiculo);
  }

  obtenerVehiculosParqueados(): Observable <Object> {
    return this.http.get(this.url);
  }
  
  registrarSalidaVehiculo(placa : String): Observable <Object> {
    return this.http.put(this.urlPut + placa, placa);
  }

 
}