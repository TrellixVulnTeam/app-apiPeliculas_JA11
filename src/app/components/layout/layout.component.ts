import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  resultado: number = 0;

  peliculasEncontradas: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  // Método para mostrar el número de resultados
  mostrarResultados(r: any){
    this.resultado = r;
  }

  // Método para mostrar las películas encontradas
  mostrarPeliculas(p: any){
    this.peliculasEncontradas.push(p);
  }

}
