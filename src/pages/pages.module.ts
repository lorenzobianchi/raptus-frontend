import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FootpathsComponent } from './footpaths/footpaths.component';

@NgModule({
  declarations: [HomeComponent, FootpathsComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
