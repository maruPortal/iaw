import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventlistComponent } from "./components/eventlist/eventlist.component";
import { EventnewComponent } from "./components/eventnew/eventnew.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { ApiModule, Configuration } from "./openapi";
import { TokenserviceService } from "./service/tokenservice.service";
import { environment } from "src/environments/environment";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent,
    EventnewComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule,
  ],
  providers: [
    {
      provide: Configuration,
      useFactory: (authService: TokenserviceService) =>
        new Configuration({
          basePath: environment.API_BASE_PATH,
          accessToken: authService.getToken.bind(authService),
        }),
      deps: [TokenserviceService],
      multi: false,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
