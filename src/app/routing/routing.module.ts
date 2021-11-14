import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginGuard } from '../guards/login.guard';
import { LoginComponent } from '../login/login.component';
import { CommunicationComponent } from '../angular-freecodecamp/communication/communication.component';
import { MyComponentComponent } from '../angular-freecodecamp/my-component/my-component.component';
import { ChildAComponent } from '../angular-freecodecamp/child-a/child-a.component';
import { ChildBComponent } from '../angular-freecodecamp/child-b/child-b.component';

const routes: Route[] = [
  {path : 'comm', component: CommunicationComponent,
    children: [
      { path : 'child-a', component: ChildAComponent},
      { path : 'child-b', component: ChildBComponent}
    ]
},
  {path : 'comp', component : MyComponentComponent}
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
