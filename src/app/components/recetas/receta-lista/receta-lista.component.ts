import { Component, EventEmitter, Output } from '@angular/core';
import { Recetas } from '../../../interfaces/recetas';

@Component({
  selector: 'app-receta-lista',
  standalone: true,
  imports: [],
  templateUrl: './receta-lista.component.html',
  styleUrl: './receta-lista.component.css',
})
export class RecetaListaComponent {
  recetas:Recetas[] = [
    {
      id: 1,
      nombre: 'Brownie',
      descripcion: 'Descripción de la receta',
      imagen: "brownie.jpg",
    },
    {
      id: 2,
      nombre: 'Crema de calabacín',
      descripcion: 'Descripción de la receta',
      imagen: 'crema-de-calabacin.jpg',
    },
    {
      id: 3,
      nombre: 'Crema de Yogur con bizcocho',
      descripcion: 'Descripción de la receta',
      imagen: 'crema-de-yogur-con-bizcocho.jpg',
    },
    {
      id: 4,
      nombre: 'Espaguetis con berenjenas',
      descripcion: 'Descripción de la receta',
      imagen: 'espaguetis-con-salsa-de-berenjenas-y-tomates.jpg',
    }
  ];

  @Output() messageEvent = new EventEmitter();

  sendMessage(value: string) {
    this.messageEvent.emit(value);
  }
}
