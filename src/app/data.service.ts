import { temporaryAllocator } from "@angular/compiler/src/render3/view/util";
import { Injectable } from "@angular/core";
import { Evento } from "./model/evento";

@Injectable({
  providedIn: "root",
})
export class DataService {
  eventos: Evento[];

  constructor() {
    this.eventos = [
      new Evento("clase", "clase de ing de apps webs", new Date()),
      new Evento("entrega", "entrega de proyecto meeting-o-matic", new Date()),
    ];
  }

  getEvents() {
    return this.eventos;
  }
  onRemove(evento: Evento) {
    this.eventos = this.eventos.filter((event) => event !== evento);
  }

  newEvent(evento: Evento) {
    this.eventos.push(evento);
  }

  findEventBy(idx: string) {
    return this.eventos.filter((evento) => evento.id == idx)[0];
  }

  onEdit(idx: string, evento: Evento) {
    let event = this.eventos[idx];
    event.nombre = evento.nombre;
    event.descripcion = evento.descripcion;
  }
}
