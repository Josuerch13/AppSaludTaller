import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { finalize } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  user!: any;
  form!: FormGroup;
  time = new Date();
  selectedOptionGenero: string='';
  selectedOptionEstadoCivil: string='';
  selectedOptionSituacionLaboral: string='';
  selectedOptionGradoAcademico: string='';
  searchTerm: string = '';

  optionsGenero = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'femenino', label: 'Femenino' }
  ];

  optionsEstadoCivil = [
    { value: 'soltero/a', label: 'Soltero/a' },
    { value: 'casado/a', label: 'Casado/a' },
    { value: 'divorciado/a', label: 'Divorciado/a' },
    { value: 'viudo/a', label: 'Viudo/a' },
    { value: 'unionLibre', label: 'Union Libre' },
  ];

  optionsSituacionLaboral = [
    { value: 'contratoLaboral', label: 'Contrato Laboral' },
    { value: 'eventual', label: 'Eventual' },
    { value: 'comercio', label: 'Comercio' },
    { value: 'laboresCasa', label: 'Labores de Casa' },
  ];

  optionsGradoAcademico = [
    { value: 'primaria', label: 'Primaria' },
    { value: 'secundaria', label: 'Secundaria' },
    { value: 'tecnicoMedio', label: 'Tecnico Medio' },
    { value: 'tecnicoSuperior', label: 'Tecnico Superior' },
    { value: 'posgrado', label: 'Posgrado' },
  ];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private dataPipe: DatePipe,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.listaUsers();
    this.create();
  }


  create() {
    this.form = this.formBuilder.group({
      id:[''],
      nombres:[''],
      apellidoPaterno:[''],
      apellidoMaterno:[''],
      telefono:[''],
      edad:[''],
      genero:[''],
      estadoCivil:[''],
      situacionLaboral:[''],
      gradoAcademico:[''],
      fechaNacimiento:[this.dataPipe.transform(Date.now(),'yyyy-MM-dd')],
      usuario:[''],
      contrasenia:['']
    });
  }

  listaUsers() {
    this.userService.getAll().subscribe(data=>{
      this.user = data;
      console.log(this.user);
    })
    this.userService.getAll().subscribe(data=>{this.users = data;})
  }

  // eventClick(item: any){
  //     this.nutricion= item
  //     this.form.controls.nutricion_id.setValue(item.nutricion_id);
  // }

  save(data:any){
    data.genero = this.selectedOptionGenero;
    data.estadoCivil = this.selectedOptionEstadoCivil;
    data.situacionLaboral = this.selectedOptionSituacionLaboral;
    data.gradoAcademico = this.selectedOptionGradoAcademico;
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
        this.router.navigate(['/user-list']);
      }
    )

    this.listaUsers();
    this.user=null;
  }


  users: any[] = [];


  // ngOnInit(): void {
  //   this.userService.getAll().subscribe(data=>{this.users = data;})
  // }

  async updateUser(user: User) {
    const response = await this.userService.updateUser(user);
    console.log(response);
  }

  async deleteUser(user: User) {
    const response = await this.userService.deleteUser(user);
    console.log(response);
  }

}
