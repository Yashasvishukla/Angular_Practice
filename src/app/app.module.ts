import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { BookModule } from './book/book.module';
import { SharedModule } from './shared/shared.module';
import { AngularFreecodecampModule } from './angular-freecodecamp/angular-freecodecamp.module';
import { FormsPracticeModule } from './forms-practice/forms-practice.module';


@NgModule({
  declarations: [							
      AppComponent,
      LoginComponent,
      ReactiveFormComponent,
      EditableTableComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HomeModule,
    BookModule,
    SharedModule,
    AngularFreecodecampModule,
    FormsPracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
