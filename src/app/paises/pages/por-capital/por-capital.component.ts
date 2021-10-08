import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  constructor(private paisService: PaisService) { }

  paisesResp: Pais[] = [];
  hayError: boolean = false;
  busqueda: string = '';

  buscar(busqueda: string) {
    this.hayError = false;
    this.busqueda = busqueda;

    this.paisService.buscarCapital(busqueda).subscribe(
      (paises) => {
        this.paisesResp = paises;
      },
      (err) => {
        this.hayError = true;
        this.paisesResp = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
