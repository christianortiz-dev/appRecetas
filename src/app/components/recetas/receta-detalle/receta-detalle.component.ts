import { Component, Input, input } from '@angular/core';
import { Recetas } from '../../../interfaces/recetas';

@Component({
  selector: 'app-receta-detalle',
  standalone: true,
  imports: [],
  templateUrl: './receta-detalle.component.html',
  styleUrl: './receta-detalle.component.css'
})
export class RecetaDetalleComponent {

  @Input() valor:String = "";

  recetas:Recetas[]= [
    {
    id: 1,
    nombre: "Brownie",
    descripcion: "Descripción de la receta",
    imagen: "brownie.jpg",
    },
    {
    id: 2,
    nombre: "Crema de calabacín",
    descripcion: "Descripción de la receta",
    imagen: "crema-de-calabacin.jpg",
    },
    {
    id: 3,
    nombre: "Crema de Yogur con bizcocho",
    descripcion: "Descripción de la receta",
    imagen: "crema-de-yogur-con-bizcocho.jpg",
    },
    {
    id: 4,
    nombre: "Espaguetis con berenjenas",
    descripcion: "Descripción de la receta",
    imagen: "espaguetis-con-salsa-de-berenjenas-y-tomates.jpg",
    }
    ]
}
