import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './consulta-filme/filme';

@Injectable({
    providedIn:'root'
})
export class FilmeService {
    readonly api_url=`http://www.omdbapi.com/?i=tt3896198&apikey=6194d734`
    #http=inject(HttpClient)

    obterFilme(titulo:string): Observable<Filme>{
        return this.#http.get<Filme>(`${this.api_url}&t=${titulo}`)
    }
}
