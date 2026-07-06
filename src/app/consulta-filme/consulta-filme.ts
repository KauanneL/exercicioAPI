import { Component, inject, signal } from '@angular/core';
import { FilmeService } from '../filme-service';
import { Filme } from './filme';

@Component({
  selector: 'app-consulta-filme',
  imports: [],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.scss',
})
export class ConsultaFilme {
  #filmeService=inject(FilmeService)
  protected filme= signal< Filme | undefined>(undefined)
  constructor(){
    this.obterFilme('Batman')
  }

  obterFilme(titulo: string){
    this.#filmeService.obterFilme(titulo).subscribe(
      res => {
        this.filme.set(res)
      }
    )
  }
}
