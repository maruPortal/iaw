import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { EventlistComponent } from "./components/eventlist/eventlist.component";
import { EventnewComponent } from "./components/eventnew/eventnew.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: EventlistComponent },
  { path: "new-event", component: EventnewComponent },
  { path: "edit-event/:idx", component: EventnewComponent },
  { path: "log-in", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
