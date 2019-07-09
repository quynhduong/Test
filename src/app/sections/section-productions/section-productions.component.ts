import { Component, OnInit } from '@angular/core';
import { Production } from '../../shared/production';

@Component({
  selector: 'app-section-productions',
  templateUrl: './section-productions.component.html',
  styleUrls: ['./section-productions.component.css']
})
export class SectionProductionsComponent implements OnInit {

  constructor() { }

  productions: Production[] = [
    {id:1, item: 
      {id: 1, name: 'SSS', description:'ABCZDFA', price:23}, 
      amount:100, startDate: new Date(2019,1,1),
      endDate: new Date(2019, 1, 1)} ,
      {id: 2, item: 
        {id: 2, name: 'SMS', description:'KASD', price:180}, 
      amount:150, startDate: new Date(2019,1,1) , endDate: new Date(2019,4,4)},
   {id:3, item: 
      {id: 3, name: 'SLS', description:'Dasdjasl', price:50},
      amount:200, startDate: new Date(2019,1,1), endDate: new Date(2019,5,5)},

  ];

  ngOnInit() {
  }

}
