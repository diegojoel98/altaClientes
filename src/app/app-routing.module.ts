import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageClientsComponent } from './components/manage-clients/manage-clients.component';

const routes: Routes = [
  { path: "", component: ManageClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
