import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() lineChartData :any;
  chartLabels = [
    'Week before',
    'Week before',
    'Last week',
    'Now'
  ];
  chartOptions = {
    responsive: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
