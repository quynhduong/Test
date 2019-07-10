import { Component, OnInit } from '@angular/core';

const PRODUCTION_LINE_CHART_DATA: any[]
=[
  {data:[1, 53, 12, 53, 23], label:'Total Production'},
];

const PRODUCTION_LINE_CHART_LABELS: string[] = ['1', '10', '20', '30','40'];

const PRODUCTION_LINE_CHART_COLORS = [ 
  {
      backgroundColor: 'rgba(6, 214, 160, 0.2)',
      borderColor: 'rgba(0, 200, 140, 0.5)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#555',
      pointHoverBorderColor: '#555',
  },
];

@Component({
  selector: 'app-production-line-chart',
  templateUrl: './production-line-chart.component.html',
  styleUrls: ['./production-line-chart.component.css']
})
export class ProductionLineChartComponent implements OnInit {

  constructor() { }

  lineChartData = PRODUCTION_LINE_CHART_DATA;
  lineChartLabels = PRODUCTION_LINE_CHART_LABELS;
  lineChartOptions: any = 
  {
    responsive: true
  };
   lineChartLegend: true;
   lineChartType= 'line';
   lineChartColors = PRODUCTION_LINE_CHART_COLORS;
  ngOnInit() {
  }

}
