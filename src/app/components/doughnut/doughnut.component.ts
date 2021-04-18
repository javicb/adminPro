import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: []
})
export class DoughnutComponent {
  @Input() doughnutChartData: MultiDataSet = [];
  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() titulo = '';

  constructor() { }

  // events
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
