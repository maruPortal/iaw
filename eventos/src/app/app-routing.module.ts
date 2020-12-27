import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { EventlistComponent } from "./components/eventlist/eventlist.component";
import { EventnewComponent } from "./components/eventnew/eventnew.component";
import { RegisterComponent } from "./components/register/register.component";
import { CanActivateGuard } from "./guarda/can-activate.guard";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: EventlistComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: "new-event",
    component: EventnewComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: "edit-event/:idx",
    component: EventnewComponent,
    canActivate: [CanActivateGuard],
  },
  { path: "log-in", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
