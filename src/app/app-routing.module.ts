import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioBlogComponent } from './components/inicio-blog/inicio-blog.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: "", component: InicioBlogComponent },
  { path: "add-client", component: ListClientsComponent },
  { path: "blogs", component: BlogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
