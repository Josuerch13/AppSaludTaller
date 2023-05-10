import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguaComponent } from './agua/agua.component';
import { EsperanzaComponent } from './esperanza/esperanza.component';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { TipoEjerciciosComponent } from './tipo-ejercicios/tipo-ejercicios.component';
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
  path:'alimentacion',
  component: AlimentacionComponent

},
{
  path:'ejercicio',
  component: EjercicioComponent

},
{
  path:'tipo-ejercicio/:id',
  component: TipoEjerciciosComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemediosRoutingModule { }
