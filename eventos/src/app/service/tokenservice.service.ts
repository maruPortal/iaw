import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "src/environments/environment";
import { TokenServiceInterface } from "./tokenservice.interface";

@Injectable({
  providedIn: "root",
})
export class TokenserviceService implements TokenServiceInterface {
  helper: JwtHelperService = null;

  constructor() {
    this.helper = new JwtHelperService();
  }

  signOut(): void {
    sessionStorage.clear();
  }

  public saveToken(token: string): void {
    sessionStorage.removeItem(environment.TOKEN_KEY);
    const decodedToken = this.helper.decodeToken(token);
    sessionStorage.setItem(environment.USER_KEY, JSON.stringify(decodedToken));
    sessionStorage.setItem(environment.TOKEN_KEY, token);
  }

  public isValid(): boolean {
    if (this.getToken()) {
      const decodedToken = this.helper.decodeToken(this.getToken());
      return this.helper.isTokenExpired(this.getToken(), decodedToken.exp);
    }
    return false;
  }

  public isLogin(): boolean {
    return this.isValid();
  }

  public getToken(): string {
    return sessionStorage.getItem(environment.TOKEN_KEY);
  }

  public saveUser(user): void {
    sessionStorage.removeItem(environment.USER_KEY);
    sessionStorage.setItem(environment.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return this.helper.decodeToken(this.getToken());
  }
}
