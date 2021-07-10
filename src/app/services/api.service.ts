
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    busqueda: string = '';

    // URLs
    urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=63b89045bd679dcc10069fcc14785882';

    constructor(private _http: HttpClient) { }

    public getPopularMovies(): Observable<any> {
        return this._http.get<any>(this.urlUpcoming);
    }

    public getMovies(url: string): Observable<any> {
        return this._http.get<any>(url);
    }
}