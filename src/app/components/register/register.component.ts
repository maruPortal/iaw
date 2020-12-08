import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserControllerService } from "src/app/openapi";
import { TokenserviceService } from "src/app/service/tokenservice.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.components.html",
  styles: [],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  constructor(
    private controllerUser: UserControllerService,
    private tokerservice: TokenserviceService,
    private activeRouter: Router
  ) {
    this.register = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  registerUser() {
    if (this.register.valid) {
      //Objeto necesario del schema
      const request = {
        username: this.register.value.username,
        email: this.register.value.email,
        password: this.register.value.password,
      };

      this.controllerUser
        .userControllerSignUp(request)
        .subscribe((response) => {
          this.tokerservice.saveToken(response.token);
          this.activeRouter.navigateByUrl("/");
        });
    }
  }
}
