import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  titulo1 = 'Ventas';
  titulo2 = 'Compras';
  titulo3 = 'Otras ventas';
  titulo4 = 'Otras compras';

  labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  labels2 = ['Sales', 'Sales', 'Mail-Order'];
  labels3 = ['Download', 'In-Store', 'Mail-Order'];
  labels4 = ['DS', 'ISS', 'MOS'];
  doughnutChartData1 = [[350, 450, 100]];
  doughnutChartData2 = [[450, 350, 150]];
  doughnutChartData3 = [[550, 250, 200]];
  doughnutChartData4 = [[650, 150, 250]];

  constructor() { }

  ngOnInit(): void {
  }

}
