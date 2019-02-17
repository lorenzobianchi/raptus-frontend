import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FootpathsComponent } from './footpaths/footpaths.component';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  declarations: [HomeComponent, FootpathsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
