import { Component, OnInit } from '@angular/core';
import { TablaVehiculosParqueadosComponent } from '../tabla-vehiculos-parqueados/tabla-vehiculos-parqueados.component';
import { Router } from '@angular/router';
import { Vehiculo } from '../modelo/Vehiculo';
import { Tiquete } from '../modelo/Tiquete';
import { ServicioParqueaderoService } from '../servicios/servicio-parqueadero.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
  providers: [ServicioParqueaderoService]
})
export class FormularioRegistroComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  tiquete: Tiquete = new Tiquete();
  tiqueteIngreso: Tiquete = new Tiquete();

  constructor(private servicioParqueadero : ServicioParqueaderoService, private router : Router, private toastr: ToastrService)   
   { }

  ngOnInit() {
   
  }

  guardar() {
    this.servicioParqueadero.registrarIngresoDelVehiculoAlPaqueadero(this.vehiculo).subscribe(

          (resultado: Tiquete) => { 
              this.tiqueteIngreso = resultado;
              this.toastr.success('El vehiculo con placa ' + resultado.vehiculo.placa + ' ingresó al parqueadero', 'Notificación' , {
              disableTimeOut:true
               }).onTap;
            }, 
          error => {
            console.log(error);
            this.toastr.error( error.error.mensaje, 'Error!' , {
              disableTimeOut:true
               }).onTap;
          });
    this.vehiculo = new Vehiculo();
    
  }



}
