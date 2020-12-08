import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserControllerService } from "src/app/openapi";
import { TokenserviceService } from "src/app/service/tokenservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  logIn: FormGroup;

  constructor(
    private controllerUser: UserControllerService,
    private tokerservice: TokenserviceService,
    private activeRouter: Router
  ) {
    this.logIn = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.logIn.valid) {
      //Objeto necesario del schema
      const request = {
        email: this.logIn.value.email,
        password: this.logIn.value.password,
      };

      this.controllerUser.userControllerLogin(request).subscribe((response) => {
        this.tokerservice.saveToken(response.token);
        this.activeRouter.navigateByUrl("/");
      });
    }
  }
}
