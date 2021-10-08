import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor: pointer;
    }
    `
  ],
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) { }

  busqueda: string = '';
  hayError: boolean = false;

  paisesResp: Pais[] = [];

  paisesSugerencias: Pais[] = [];
  mostrarSugerencias: boolean = false;

  buscar(busqueda: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;

    this.paisService.buscarPais(this.busqueda).subscribe(
      (paises) => {
        this.paisesResp = paises;
      },
      (error) => {
        this.hayError = true;
        this.paisesResp = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.busqueda = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(paises => this.paisesSugerencias = paises.splice(0, 3),
      error => {
        this.paisesSugerencias = [];
        this.hayError = true;
      });
  }
}
