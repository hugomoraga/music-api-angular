import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    HomeComponent,
    MusicComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgbPaginationModule
  ]
})
export class ComponentsModule { }
