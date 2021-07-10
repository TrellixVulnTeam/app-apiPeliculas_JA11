import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output () resultado: EventEmitter<string> = new EventEmitter();
  @Output () peliculasEncontradas: EventEmitter<string> = new EventEmitter();

  // Parámetro de búsqueda
  busqueda: string = '';

  // URL para buscar
  urlAllMovies = 'https://api.themoviedb.org/3/search/movie?api_key=63b89045bd679dcc10069fcc14785882&query=';
  urlBusqueda: string = '';

  // Ruta raíz de la imagen
  rutaImagen: string = 'https://image.tmdb.org/t/p/w500/';

  // Resultados
  resultados: number = 0;

  // Películas encontradas 
  peliculas: Pelicula[] = [];
  data: any = {};

  constructor(public _apiService: ApiService) {}

  ngOnInit(): void {
  }
  
  // Método para mostrar los resultados de la búsqueda
  mostrarResultados(){

    this.urlBusqueda = this.urlAllMovies+this.busqueda;

    this._apiService.getMovies( this.urlBusqueda).subscribe(pelicula =>{

      // Se envían el número de resultados
      this.resultado.emit(pelicula.results.length);      
      
      // Se guarda en un array los datos de cada película
      for (let i = 0; i < pelicula.results.length; i++){
        this.data = {id: pelicula.results[i].id, titulo: pelicula.results[i].title, descripcion: pelicula.results[i].overview, estreno: pelicula.results[i].release_date, puntuacion: pelicula.results[i].vote_average, imagen: this.rutaImagen + pelicula.results[i].poster_path};
        this.peliculas.push(this.data);
        this.peliculasEncontradas.emit(this.data);
      }
    });
  }

}
