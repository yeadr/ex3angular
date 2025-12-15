import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  imports: [],
  templateUrl: './ex1.html',
  styleUrl: './ex1.scss',
})
export class Ex1 implements OnInit{
  
  ngOnInit(){
    document.addEventListener('mousedown', () => this.bgblau());
    document.addEventListener('mouseup', () => this.bgtaronja());
  }

  bgblau(){
    document.body!.style.backgroundColor = "blue"
  }

  bgtaronja(){
    document.body!.style.backgroundColor = "orange"
  }
}
