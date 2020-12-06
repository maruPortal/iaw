import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventlistComponent } from "./eventlist/eventlist.component";
import { EventnewComponent } from "./eventnew/eventnew.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: EventlistComponent },
  { path: "new-event", component: EventnewComponent },
  { path: "edit-event/:idx", component: EventnewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
