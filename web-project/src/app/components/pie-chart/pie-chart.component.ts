import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() pieChartData :any;
  chartLabels = [
    'Work requests',
    'Work plans',
    'Safety documents',
  ];
  chartOptions = {
    responsive: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}

