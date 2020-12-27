import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Evento, EventoControllerService } from "src/app/openapi";

@Component({
  selector: "app-eventnew",
  templateUrl: "./eventnew.component.html",
  styles: [],
})
export class EventnewComponent implements OnInit {
  newEventForm: FormGroup;
  idx: string;
  titulo = "Nuevo evento";

  constructor(
    private controllerEvent: EventoControllerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newEventForm = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.idx = this.route.snapshot.paramMap.get("idx");
    if (this.idx) {
      this.titulo = "Modificar evento";
    }
  }

  onSubmit() {
    if (this.newEventForm.valid) {
      //   if (this.newEventForm.get("nombre").value) {
      //     this.event.nombre = this.newEventForm.get("nombre").value;
      //   }
      //   if (this.newEventForm.get("descripcion").value) {
      //     this.event.descripcion = this.newEventForm.get("descripcion").value;
      //   }
      if (this.idx) {
        this.edit();
      } else {
        this.create();
      }
      this.router.navigateByUrl("home");
    }
  }

  create() {
    const request = {
      nombre: this.newEventForm.value.nombre,
      descripcion: this.newEventForm.value.descripcion,
    };
    this.controllerEvent.eventoControllerCreate(request).subscribe();
  }

  edit() {
    const request = {
      nombre: this.newEventForm.value.nombre,
      descripcion: this.newEventForm.value.descripcion,
    };
    this.controllerEvent
      .eventoControllerUpdateById(this.idx, request)
      .subscribe();
  }
}
