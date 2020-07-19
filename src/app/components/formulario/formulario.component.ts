import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  nombre: string = "";
  cedula: string ="";
  telefono: string="";
  sexualidad: any[] = [];
  estadoCivil: any[] = [];
  sexualidad2: string = "";
  estadoCivil2: string = "";

  constructor() {}

  ngOnInit(): void {
    this.sexualidad = [
      "Masculino",
       "Femenino",
      ];
    this.estadoCivil = [
     " Soltero",
      "Casado",
      "Viudo",
    "Divorciado",
    "Union Libre",
    ];
  }
}
