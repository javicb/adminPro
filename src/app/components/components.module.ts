import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementarComponent } from './incrementar/incrementar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IncrementarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementarComponent
  ]
})
export class ComponentsModule { }
