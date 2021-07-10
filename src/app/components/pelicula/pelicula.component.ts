import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

export interface Pelicula { 
  id: string;
  titulo: string;
  descripcion: string;
  estreno: string;
  puntuacion: string;
  imagen: string;
}

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  peliculas: Pelicula[] = [];
  data: any = {};

  rutaImagen: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(public _apiService: ApiService) {
    this.mostrarDatos();
  }

  ngOnInit(): void {
  }
  
  // Método para mostrar datos del servicio
  mostrarDatos(){
    this._apiService.getPopularMovies().subscribe(pelicula => {
      for (let i = 0; i < pelicula.results.length; i++){
        this.data = {id: pelicula.results[i].id, titulo: pelicula.results[i].title, descripcion: pelicula.results[i].overview, estreno: pelicula.results[i].release_date, puntuacion: pelicula.results[i].vote_average, imagen: this.rutaImagen + pelicula.results[i].poster_path};
        this.peliculas.push(this.data);
      }
    });
  }
}
