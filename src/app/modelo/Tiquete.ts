import { Vehiculo } from './../modelo/Vehiculo';
import { from } from 'rxjs';

export class Tiquete{
    idTiquete: number;
    fechaIngreso: Date;
    fechaSalida: Date;
    valorServicio: number;
    vehiculo: Vehiculo;
}
