import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescansoComponent } from './descanso/descanso.component';
import { EsperanzaComponent } from './esperanza/esperanza.component';

const routes: Routes = [
  {
    path:'esperanza',
    component: EsperanzaComponent
  },
  {
    path:'descanso',
    component: DescansoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemediosRoutingModule { }