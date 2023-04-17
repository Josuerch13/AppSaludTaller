import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// import { RemediosRoutingModule } from './remedios-routing.module';
// import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
// import { ConfiguracionComponent } from './configuracion/configuracion.component';
// import { EjercicioComponent } from './ejercicio/ejercicio.component';
// import { AguaComponent } from './agua/agua.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { TipoEjerciciosComponent } from './tipo-ejercicios/tipo-ejercicios.component';
// import { CronometroComponent } from './cronometro/cronometro.component';
import { WebMaterialModule } from '../../webmaterial.module';
import { AdministradoresRoutingModule } from './administradores-routing.module';
import { NewUserComponent } from './new-user/new-user.component';

// import{} from'@angular/flex-layout'
@NgModule({
  declarations: [
    // AlimentacionComponent,
    // ConfiguracionComponent,
    // EjercicioComponent,
    // AguaComponent,
    // TipoEjerciciosComponent,
    // CronometroComponent
    NewUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    // RemediosRoutingModule,
    AdministradoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WebMaterialModule
  ],
  providers: [
  AngularFirestore,
  DatePipe,
  ]
})
// export class RemediosModule { }
export class AdministradoresModule { }