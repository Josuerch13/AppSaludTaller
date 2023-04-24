import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescansoComponent } from './descanso/descanso.component';
import { AguaComponent } from './agua/agua.component';
import { EsperanzaComponent } from './esperanza/esperanza.component';
import { LuzSolarComponent } from './luz-solar/luz-solar.component';
import { AlimentacionComponent } from './alimentacion/alimentacion.component'
const routes: Routes = [
  {
    path:'agua',
    component: AguaComponent
  },
  {
    path:'esperanza',
    component: EsperanzaComponent

  },
  {
    path:'descanso',
    component: DescansoComponent
  },
  {
    path:'luz-solar',
    component: LuzSolarComponent
  },
=======
  path:'alimentacion',
  component: AlimentacionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemediosRoutingModule { }
