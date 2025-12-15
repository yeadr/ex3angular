import { Component, signal } from '@angular/core';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';

@Component({
  selector: 'app-root',
  imports: [Ex1, Ex2, Ex3],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularEx3');
}
