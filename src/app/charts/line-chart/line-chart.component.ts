import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.colors';


/*const LINE_CHART_SAMPLE_DATA: any[]
 = [
   {data: [32, 14, 46, 32, 14, 46], label:'Small Round Steel'},
   {data: [25, 30, 18, 52, 14, 32], label:'Medium Round Steel'},
   {data: [12, 34, 44, 22, 53, 46], label:'Large Round Steel'},
 ];


 const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];*/

 const LINE_CHART_SAMPLE_DATA: any[]
 =[
   {data:[1, 53, 12, 53, 23], label:'Total Production'},
 ];
 
 const LINE_CHART_LABELS: number[] = [1, 10, 20, 30, 4];
 

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;



  ngOnInit() {
  }



}
