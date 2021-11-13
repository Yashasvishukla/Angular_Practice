import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';


const routes: Route[] = [

  {path: '', component: BookInfoComponent}
];

@NgModule({
  declarations: [
    BookInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class BookModule { }
