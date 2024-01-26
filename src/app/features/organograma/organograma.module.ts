import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganogramaRoutingModule } from './organograma-routing.module';
import { OrganogramaService } from './services/organograma.service';
import { HttpClientModule } from '@angular/common/http';
import { OrganogramaComponent } from './organograma.component';


@NgModule({
  declarations: [
    OrganogramaComponent
  ],
  imports: [
    CommonModule,
    OrganogramaRoutingModule,
    HttpClientModule
  ],
  providers: [
    OrganogramaService
  ]
})
export class OrganogramaModule { }
