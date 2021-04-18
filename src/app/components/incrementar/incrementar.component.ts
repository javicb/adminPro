import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styles: [
  ]
})
export class IncrementarComponent implements OnInit {

  @Input('valor') progreso: number = 50;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(valor: number): void {
    if ((this.progreso + valor) > 100) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    } else {
      if ((this.progreso + valor) < 0) {
        this.valorSalida.emit(0);
        this.progreso = 0;
      } else {
        this.progreso = this.progreso + valor;
        this.valorSalida.emit(this.progreso);
      }
    }
  }

}
