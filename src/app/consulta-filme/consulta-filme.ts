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
  filmes = signal<Filmes[]>([]);
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
  obterFilmes(titulo:string){
    if (this.formFilmes.invalid) {
      this.formFilmes.markAllAsTouched();
      return;
    }
    this.#filmeService.obterFilmes(titulo).subscribe(
      res => {
        if (res) {
           Object.keys(res).forEach(filme => {
            this.filmes.push(filme)
           })} else {
          
        }
      }
    )
  }
}
