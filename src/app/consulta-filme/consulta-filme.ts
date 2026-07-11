import { Component, inject, signal } from '@angular/core';
import { FilmeService } from '../filme-service';
import { Filme, Filmes } from './filme';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-consulta-filme',
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.scss',
})
export class ConsultaFilme {
  #filmeService=inject(FilmeService)
  protected filme= signal< Filme | undefined>(undefined)
  filmes = signal<Filme[]>([]);
  #formBuilder = inject(FormBuilder);
  protected formFilmes: FormGroup;
  constructor(){
     this.formFilmes = this.#formBuilder.group({
      nome: ['', Validators.required],
    });
  }

  obterFilme(titulo: string){
    this.#filmeService.obterFilme(titulo).subscribe(
      res => {
        this.filme.set(res)
      }
    )
  }
  obterFilmes(titulo: string) {
  this.#filmeService.obterFilmes(titulo).subscribe(res => {
    this.filmes.set(res.Search);
  });
}
}
