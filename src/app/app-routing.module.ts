import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'organograma',
    pathMatch: 'full'
  },
  {
    path: 'organograma',
    loadChildren: () => import('./features/organograma/organograma.module').then(m => m.OrganogramaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
