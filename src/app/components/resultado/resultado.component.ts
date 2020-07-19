import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  nombre: string = '';
  cedula: string = '';
  telefono: string = '';
  sexualidad: string = '';
  estadoCivil: string = '';
  sexomostrar: boolean;

  constructor(private llamarDatos: ActivatedRoute) {}
  ngOnInit(): void {
    this.llamarDatos.params.subscribe((params) => {
      this.nombre = params.nombre;
      this.cedula = params.cedula;
      this.telefono = params.telefono;
      this.sexualidad = params.sexualidad;
      this.estadoCivil = params.estadoCivil;

      if (this.sexualidad == 'Masculino') {
        this.sexomostrar = true;
      } else {
        this.sexomostrar = false;
      }
    });
  }
}
