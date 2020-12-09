import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Evento, EventoControllerService } from "src/app/openapi";
import { TokenserviceService } from "src/app/service/tokenservice.service";

@Component({
  selector: "app-eventlist",
  templateUrl: "./eventlist.component.html",
  styles: ["./eventlist.component.css"],
})
export class EventlistComponent implements OnInit {
  eventos: Evento[];

  constructor(
    private auth: TokenserviceService,
    private controllerEvent: EventoControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.controllerEvent.eventoControllerFind().subscribe((eventos) => {
      this.eventos = eventos;
    });
  }

  onRemove(evento: Evento) {
    this.controllerEvent.eventoControllerDeleteById(evento.id).subscribe();
    //no refresca bien
    this.router.navigateByUrl("home");
  }
}
