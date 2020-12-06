import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { Evento } from "../model/evento";

@Component({
  selector: "app-eventlist",
  templateUrl: "./eventlist.component.html",
  styles: ["./eventlist.component.css"],
})
export class EventlistComponent implements OnInit {
  eventos: Evento[];

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.eventos = this.service.getEvents();
  }

  onRemove(evento: Evento) {
    this.service.onRemove(evento);
    this.eventos = this.service.getEvents();
  }

  // onEdit(evento: Evento) {
  //   // this.router.navigateByUrl("edit-event");
  //   this.service.onEdit(evento);
  // }
}
