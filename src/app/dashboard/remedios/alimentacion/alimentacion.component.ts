import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AlimentacionService } from '../../../core/services/alimentacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.component.html',
  styleUrls: ['./alimentacion.component.scss']
})
export class AlimentacionComponent implements OnInit {
  reservas: any[] = [];
  nombre:any[]=[];
  alimentacion!: any;
  form!: FormGroup;
  time = new Date();
  nutricion!: any;

  hora:any;


  constructor(private fb: FormBuilder,
    private alimentacionService: AlimentacionService,
    private formBuilder: FormBuilder,
    private dataPipe: DatePipe
  ) { }
  forms: FormGroup = this.fb.group({
    descripcion: [''],
    nombre:[''],
    fecha: [''], // Agrega los nombres de los campos de tu formulario aquí
    hora: [''],
    saludable: ['']

  });

  ngOnInit(): void {
    this.hora=this.dataPipe.transform(Date.now(),'HH:mm');

    this.listaAlimentacion();
    this.create();
    console.log('hora', this.hora);

  }

  create() {

    this.form = this.formBuilder.group({
      nutricion_id:[''],
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      saludable:['', Validators.required],
      fecha:[this.dataPipe.transform(Date.now(),'yyyy-MM-dd')],
      hora:[this.dataPipe.transform(Date.now(),'HH:mm:ss')],
      estado:['']
    });
  }

  listaAlimentacion() {
    this.alimentacionService.getAll().subscribe(data=>{
      this.alimentacion = data;
      console.log(this.alimentacion);

    })
  }

  eventClick(item: any){
      this.nutricion= item
      this.form.controls.nutricion_id.setValue(item.nutricion_id);
  }

  save(data:any){
    this.reservas.push(data);

    // Limpia el formulario después de guardar los datos
    this.form.reset();
    this.alimentacionService.create(data).pipe(
      finalize(() => {
        this.form.markAsPristine();
      })
      ).subscribe(
      data=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Dato registrado con Exito',
          // text: 'postivo',
          text: data.succes,
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
    this.listaAlimentacion();
    this.nutricion=null;
  }

}
