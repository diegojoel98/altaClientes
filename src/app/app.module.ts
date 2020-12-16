import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { InicioBlogComponent } from './components/inicio-blog/inicio-blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientsComponent,
    InicioBlogComponent,
    BlogsComponent
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
