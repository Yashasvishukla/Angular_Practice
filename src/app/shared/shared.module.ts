import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RoutingModule } from '../routing/routing.module';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [NavComponent]
})
export class SharedModule { }
