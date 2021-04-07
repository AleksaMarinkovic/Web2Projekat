import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A'
    }
    
  ];
  chartLabels = [
    'Temp1',
    'Temp2',
    'Temp3',
    'Temp4'
  ];
  chartOptions = {
    responsive: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}

