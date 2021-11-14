import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';
import { CommunicationComponent } from './communication/communication.component';
import { JsonPipe } from './Json.pipe';
import { SizerComponent } from './sizer/sizer.component';
import { HighlighterDirective } from './highlighter.directive';
import { RoutingModule } from '../routing/routing.module';



@NgModule({
  declarations: [		
    MyComponentComponent,
    CommunicationComponent,
    JsonPipe,
    SizerComponent,
    HighlighterDirective,
   ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [MyComponentComponent]
})
export class AngularFreecodecampModule { }
