import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsperanzaComponent } from './esperanza/esperanza.component';

const routes: Routes = [
  {
    path:'esperanza',
    component: EsperanzaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemediosRoutingModule { }