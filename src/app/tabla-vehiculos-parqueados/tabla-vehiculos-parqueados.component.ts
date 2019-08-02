import { Component, OnInit } from '@angular/core';
import { ServicioParqueaderoService } from '../servicios/servicio-parqueadero.service';
import { Vehiculo } from '../modelo/Vehiculo';
import { Tiquete } from '../modelo/Tiquete';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tabla-vehiculos-parqueados',
  templateUrl: './tabla-vehiculos-parqueados.component.html',
  styleUrls: ['./tabla-vehiculos-parqueados.component.css'],
  providers: [ServicioParqueaderoService]
})
export class TablaVehiculosParqueadosComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  tiquetes: Tiquete = new Tiquete();
  tiqueteDeSalida: Tiquete = new Tiquete();

 

  constructor(private servicioParqueadero : ServicioParqueaderoService, private router : Router, private toastr: ToastrService)   
  { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.servicioParqueadero.obtenerVehiculosParqueados().subscribe(
      
      (resultado: Tiquete) => { 
                this.tiquetes = resultado;
                console.log(this.tiquetes);
              }, 
      error =>{
                debugger; 
                console.log(error);
    });
  }

  salida(placa : any) {
    this.servicioParqueadero.registrarSalidaVehiculo(placa).subscribe(

      (resultado: Tiquete) => {
              this.tiqueteDeSalida = resultado;
              console.log(resultado),
              this.toastr.info ('El vehiculo con placa ' + resultado.vehiculo.placa + ' debe pagar $ ' + resultado.valorServicio , 'RECIBO DE CAJA' , {
              disableTimeOut:true
               }).onTap;
               this.consultar();
            },
      error=>{
              console.log(error);
            this.toastr.error( error.error.mensaje, 'Error!' , {
              disableTimeOut:true
               }).onTap;
      });
  }

  limpiar(){
    this.tiquetes = null;
  }

}
