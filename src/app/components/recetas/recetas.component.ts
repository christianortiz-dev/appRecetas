import { Component } from '@angular/core';
import { RecetaListaComponent } from './receta-lista/receta-lista.component';
import { RecetaDetalleComponent } from './receta-detalle/receta-detalle.component';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [RecetaListaComponent, RecetaDetalleComponent],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  nombre ="";
  receiveMessage($event: any) {
    this.nombre=$event;
  }
}
