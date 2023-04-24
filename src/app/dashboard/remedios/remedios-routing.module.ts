import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguaComponent } from './agua/agua.component';
import { EsperanzaComponent } from './esperanza/esperanza.component';

const routes: Routes = [
  {
    path:'agua',
    component: AguaComponent
  },
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