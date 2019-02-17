import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkCardComponent } from './dark-card/dark-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DarkCardComponent],
  exports: [DarkCardComponent]
})
export class ComponentsModule { }
