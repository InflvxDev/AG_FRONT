import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OptimizadorRutasAGService } from '../../Services/optimizador-rutas-ag.service';
import { InitTsp } from '../../Models/InitTsp';

@Component({
  selector: 'app-optimizador-rutas',
  templateUrl: './optimizador-rutas.component.html',
  styleUrls: ['./optimizador-rutas.component.css']
})
export class OptimizadorRutasComponent implements OnInit {
  datosEntrada : InitTsp;
  constructor(private formBuilder: FormBuilder, private optimizadorRutasAGService : OptimizadorRutasAGService) {
    this.datosEntrada = new InitTsp();
   }

  ngOnInit(): void {
  }

  ParamEnt = this.formBuilder.group({
    n_city: ['',Validators.required],
    pop_size: ['',Validators.required],
    elite_size: ['',Validators.required],
    mutation_rate: ['',Validators.required],
    n_generations: ['',Validators.required],
  });

  onReset(){
    this.ParamEnt.reset();
  }

  InicializarAlgoritmo(){
    
    this.datosEntrada = this.ParamEnt.value;
    console.log(this.datosEntrada);
    this.onReset()

    this.optimizadorRutasAGService.postinit(this.datosEntrada).subscribe(result =>{
      console.log(result);
    })
  }

}
