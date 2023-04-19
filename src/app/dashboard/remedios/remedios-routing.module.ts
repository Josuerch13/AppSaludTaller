import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsperanzaComponent } from './esperanza/esperanza.component';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
const routes: Routes = [
  {
    path:'esperanza',
    component: EsperanzaComponent

  },
  {
  path:'alimentacion',
  component: AlimentacionComponent

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemediosRoutingModule { }
