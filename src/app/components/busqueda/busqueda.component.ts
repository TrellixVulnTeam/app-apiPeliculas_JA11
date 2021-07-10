import { Component, OnInit, Input } from '@angular/core';

export interface Pelicula { 
  id: string;
  titulo: string;
  descripcion: string;
  estreno: string;
  puntuacion: string;
  imagen: string;
}

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @Input() resultado: number = 0;
  @Input() peliculasEncontradas: Pelicula[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
