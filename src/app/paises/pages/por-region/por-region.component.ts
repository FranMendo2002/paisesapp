import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin: .5rem;
    }
  `
  ]
})
export class PorRegionComponent {

  constructor(private paisService: PaisService) { }

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];
  hayError: boolean = false;

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (this.regionActiva !== region) {
      this.regionActiva = region;
      this.paises = [];
      this.paisService.buscarRegion(region).subscribe(paises => {
        this.paises = paises;
      }, err => {
        this.hayError = true;
        this.paises = [];
      });
    }

  }

}
