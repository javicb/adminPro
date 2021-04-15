import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;

  get getPorcentaje() {
    return `${this.progreso}%`
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(valor: number) {
    if ((this.progreso + valor) > 100) {
      this.progreso = 100;
    } else {
      if ((this.progreso + valor) < 0) {
        this.progreso = 0;
      } else {
        this.progreso = this.progreso + valor;
      }
    }
  }
}
