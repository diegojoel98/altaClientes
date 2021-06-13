import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import swal from 'sweetalert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageClientsComponent } from './components/manage-clients/manage-clients.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
