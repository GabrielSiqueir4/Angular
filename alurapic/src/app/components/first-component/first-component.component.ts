import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Gabriel';
  age: number = 25;
  job = 'programador';
  hobbie = ['correr', 'nadar', 'malhar'];
  car = {
    name: 'gol',
    year: 1996,

  };

  constructor() { }

  ngOnInit(): void {

  }
}
