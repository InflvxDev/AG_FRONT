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
  fileContent: string;
  vectorDistrict = [];
  constructor(private formBuilder: FormBuilder, private optimizadorRutasAGService : OptimizadorRutasAGService) {
    this.datosEntrada = new InitTsp();
   }

  ngOnInit(): void {
  }

  ParamEnt = this.formBuilder.group({
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
    this.mapDistricts();
    console.log(this.datosEntrada);
    this.onReset()

    this.optimizadorRutasAGService.postinit(this.datosEntrada).subscribe(result =>{
      console.log(result);
    })
  }

  onChange(event) {
    let file = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.readAsText(file);

    let self = this;
    this.vectorDistrict = [];
    fileReader.onload = e => {
      self.fileContent = fileReader.result as string;
      console.log(self.fileContent);

      var rows = self.fileContent.split('\r\n');

      for (var i = 1; i < rows.length; i++) {
        if (rows[i].length != 0) {
          this.vectorDistrict.push(rows[i].split(',').map(Number));
        }
      }
      event.target.value = '';
    };

  }

  mapDistricts() {
    this.datosEntrada.list_district = [];
    for (let i = 0; i < this.vectorDistrict.length; i++) {
      this.datosEntrada.list_district.push({
        name: this.vectorDistrict[i][0],
        x: this.vectorDistrict[i][1],
        y: this.vectorDistrict[i][2]
      });
    }
  }

}
