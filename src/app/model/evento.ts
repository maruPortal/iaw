import { LocationChangeEvent } from "@angular/common";

export class Evento {
  nombre: string;
  descripcion: string;
  id: string;
  opciones: any;
  creationDate: Date;

  constructor(nombre: string, descripcion: string, date: Date) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.creationDate = date;
  }
}
