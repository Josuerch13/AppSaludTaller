import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RemediosRoutingModule } from './remedios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { WebMaterialModule } from '../../webmaterial.module';
import { DescansoComponent } from './descanso/descanso.component';
import { LuzSolarComponent } from './luz-solar/luz-solar.component';
import { CronometroComponent } from './cronometro/cronometro.component';

@NgModule({
    declarations: [
        ConfiguracionComponent,
        LuzSolarComponent,
        CronometroComponent,
        DescansoComponent
    ],
    imports: [
        CommonModule,
        RemediosRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatRadioModule,
        WebMaterialModule
    ],
    providers: [AngularFirestore, DatePipe]
})
export class RemediosModule { }
