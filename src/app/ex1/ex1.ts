import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  imports: [],
  templateUrl: './ex1.html',
  styleUrl: './ex1.scss',
})
export class Ex1 {
  
  bgblau(id: string){
    document.getElementById(id)!.style.backgroundColor = "blue"
  }

  bgtaronja(id: string){
    document.getElementById(id)!.style.backgroundColor = "orange"
  }
}
