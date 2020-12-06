import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data.service";
import { Evento } from "../model/evento";

@Component({
  selector: "app-eventnew",
  templateUrl: "./eventnew.component.html",
  styles: [],
})
export class EventnewComponent implements OnInit {
  newEventForm: FormGroup;
  event: Evento;
  idx: string;

  constructor(
    private router: Router,
    private service: DataService,
    private route: ActivatedRoute
  ) {
    this.newEventForm = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.idx = this.route.snapshot.paramMap.get("idx");
    if (this.idx !== null) {
      this.event = this.service.getEvents()[this.idx];

      console.log(this.event.nombre);
    }
  }

  onSubmit() {
    if (this.idx !== null) {
      if (this.newEventForm.get("nombre").value) {
        this.event.nombre = this.newEventForm.get("nombre").value;
      }
      if (this.newEventForm.get("descripcion").value) {
        this.event.descripcion = this.newEventForm.get("descripcion").value;
      }
      this.service.onEdit(this.idx, this.event);
    } else {
      this.event = new Evento(
        this.newEventForm.get("nombre").value,
        this.newEventForm.get("descripcion").value,
        new Date()
      );
      this.service.newEvent(this.event);
    }

    this.router.navigateByUrl("home");
  }
}
