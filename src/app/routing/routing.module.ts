import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginGuard } from '../guards/login.guard';
import { LoginComponent } from '../login/login.component';

const routes: Route[] = [
  {path: 'home', component: HomeComponent},
  
  {
    path: 'book-category',
    loadChildren: () => import('../book/book.module').then(m => m.BookModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
