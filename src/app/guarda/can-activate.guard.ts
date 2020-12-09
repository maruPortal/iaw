import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenserviceService } from "../service/tokenservice.service";

@Injectable({
  providedIn: "root",
})
export class CanActivateGuard implements CanActivate {
  constructor(private token: TokenserviceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.token.isLogin()) {
      this.router.navigate(["/log-in"]);
      return false;
    }
    return true;
  }
}
