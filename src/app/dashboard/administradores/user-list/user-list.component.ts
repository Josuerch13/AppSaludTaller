import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { finalize } from 'rxjs';
import { historial } from '../../../core/models/historial';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // users: any[];
  historial:any[]=[];
  users: any[] = [];
  form!: FormGroup;
  searchTerm: string = '';
  cancer: string = '';
  apellidoPaterno: string='';
  searchVisible = false;
  historyVisible = false;
  inputVisible = false;
  inputCancer1 = false;
  isOn = false;
  myForm!: FormGroup;


  constructor(private userService: UserService, private formBuilder: FormBuilder,) { }

  // formtest() {
  //   this.myForm = this.formBuilder.group({
  //     toggleCancer: false,
  //     toggle2: false
  //   });
  // }

  save(data:any){
    this.userService.create(data).pipe(
      finalize(() => {
        this.form.markAsPristine();
      })
      ).subscribe(
      data=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario registrado Exitosamente',
          // text: 'postivo',
          text: data.succes,
          showConfirmButton: false,
          timer: 1500
        });
      }
    )

  }
  // listaHistorial() {
  //   this.historialService.getAll().subscribe(data=>{
  //     this.historial = data;
  //     console.log(this.historial);
  //   })
  //   this.hisotorialService.getAll().subscribe(data=>{this.users = data;})
  // }

  create() {
    this.form = this.formBuilder.group({
      id:[''],
      cancer:[''],
      diabetes:[''],
      cardiaco:[''],
      respiratorio:[''],
      mental:[''],
      cardiovascular:[''],
      respiratorio2:[''],
      digestivo:[''],
      endocrino:[''],
      musculo:[''],
      mental2:[''],
      oncologico:[''],
      infeccioso:[''],
      obstetrico:[''],
      ginecologico:[''],
      anticonceptivo:[''],
      vSexual:[''],
      actual:[''],
      snc:[''],
      cardiovascular2:[''],
      respiratorio3:[''],
      gastrointestinal:[''],
      musculo2:[''],
      linfatico:[''],
      endocrino2:[''],
    });
  }

  ngOnInit(): void {
    // this.formtest()
    this.userService.getAll().subscribe(data=>{
      this.users = data;
      this.create();
    })
  }

  searchUsersName() {
    this.userService.searchUsersByName(this.searchTerm).subscribe(data => {
      this.users = data;
    });
  }

  inputCancer() {
    // this.userService.searchUsersByName(this.searchTerm).subscribe(data => {
    //   this.users = data;
    // });
  }

  searchUsersLastName() {
    this.userService.searchUsersByLastName(this.apellidoPaterno).subscribe(data => {
      this.users = data;
    });
  }

  async deleteUser(user: User) {
    const response = await this.userService.deleteUser(user);
    console.log(response);
  }

  showSearch() {
    this.searchVisible = true;
  }

  showHistory(user: User) {
    this.historyVisible = true;
    console.log("this is user: ", user.id );
  }

  save2(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Historial Medico Registrado Exitosamente',
      // text: 'postivo',
      // text: data.succes,
      showConfirmButton: false,
      timer: 1500
    });
    // this.router.navigate(['/user-list']);
  }



  toggleDiabetes() {
    this.inputVisible = true;
  }
  toggleCancer() {
    this.inputCancer1 = true;
    console.log("activo");

  }
  toggleCardiaco() {
    this.inputVisible = true;
  }
  toggleRespiratorio() {
    this.inputVisible = true;
  }
  toggleMental() {
    this.inputVisible = true;
  }
  toggleCardioVascular() {
    this.inputVisible = true;
  }
  toggleRespiratorio2() {
    this.inputVisible = true;
  }
  toggleDigestivo() {
    this.inputVisible = true;
  }
  toggleEndocrino() {
    this.inputVisible = true;
  }
  toggleMusculo() {
    this.inputVisible = true;
  }
  toggleMental2() {
    this.inputVisible = true;
  }
  toggleOncologico() {
    this.inputVisible = true;
  }
  toggleInfeccioso() {
    this.inputVisible = true;
  }
  toggleObstetrico() {
    this.inputVisible = true;
  }
  toggleGinecologico() {
    this.inputVisible = true;
  }
  toggleAnticonceptivo() {
    this.inputVisible = true;
  }
  toggleVSexual() {
    this.inputVisible = true;
  }
  toggleEActual() {
    this.inputVisible = true;
  }
  toggleSNC() {
    this.inputVisible = true;
  }
  toggleCardio2() {
    this.inputVisible = true;
  }
  toggleRespiratorio3() {
    this.inputVisible = true;
  }
  toggleGastro() {
    this.inputVisible = true;
  }
  toggleMusculo2() {
    this.inputVisible = true;
  }
  toggleLinfatico2() {
    this.inputVisible = true;
  }
  toggleEndocrino2() {
    this.inputVisible = true;
  }
}
