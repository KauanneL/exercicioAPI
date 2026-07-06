import { Component, signal } from '@angular/core';
import { ConsultaFilme } from './consulta-filme/consulta-filme';

@Component({
  selector: 'app-root',
  imports: [ ConsultaFilme],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Filmes');
}
