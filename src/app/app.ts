import { Component, signal } from '@angular/core';
import { Ex1 } from './ex1/ex1';

@Component({
  selector: 'app-root',
  imports: [Ex1],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularEx3');
}
