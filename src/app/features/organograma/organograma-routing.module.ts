import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganogramaComponent } from './organograma.component';

const routes: Routes = [
  {
    path: '',
    component: OrganogramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganogramaRoutingModule { }
