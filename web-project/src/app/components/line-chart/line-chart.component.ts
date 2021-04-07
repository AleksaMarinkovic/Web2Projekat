import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Planned incident'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Unplanned incident'
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
