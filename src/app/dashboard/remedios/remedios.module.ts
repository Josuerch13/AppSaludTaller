import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RemediosRoutingModule } from './remedios.routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { WebMaterialModule } from '../../webmaterial.module';
import { DescansoComponent } from './descanso/descanso.component';
import { AguaComponent } from './agua/agua.component';
import { EsperanzaComponent } from './esperanza/esperanza.component';
import { LuzSolarComponent } from './luz-solar/luz-solar.component';
import { CronometroComponent } from './cronometro/cronometro.component';

import { AlimentacionComponent } from './alimentacion/alimentacion.component';
// import{} from'@angular/flex-layout'
@NgModule({
  declarations: [
    DescansoComponent,
    CronometroComponent,
    LuzSolarComponent,
    EsperanzaComponent,
    AlimentacionComponent,
    AguaComponent,
    EsperanzaComponent
  ],
  imports: [
    CommonModule,
    RemediosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WebMaterialModule
  ],
  providers: [
  AngularFirestore,
  DatePipe,
  ]
})
export class RemediosModule { }
