import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenserviceService } from "src/app/service/tokenservice.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(
    private tokerservice: TokenserviceService,
    private activeRouter: Router
  ) {}

  ngOnInit(): void {}

  isAuth() {
    return this.tokerservice.isLogin();
  }

  logOut() {
    this.tokerservice.signOut();
    this.activeRouter.navigateByUrl("/");
  }
}
