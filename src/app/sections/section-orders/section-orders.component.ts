import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer:
       {id: 1, name: 'Q', state: 'BK', email:'mainstr@example.com'}, 
       total:230, placed: new Date(2019,12,12), fullfilled: new Date(2019, 12, 13)},
   {id: 2, customer:
        {id: 1, name: 'A', state: 'Phuket', email:'whatever@example.com'}, 
        total:230, placed: new Date(2019,12,12), fullfilled: new Date(2019, 12, 14)},
  {id: 3, customer:
          {id: 1, name: 'K', state: 'BK', email:'blabla@example.com'}, 
          total:230, placed: new Date(2019,12,12), fullfilled: new Date(2019, 12, 20)},
  {id: 4, customer:
         {id: 1, name: 'N', state: 'BK', email:'alibaba@example.com'}, 
         total:230, placed: new Date(2019,12,12), fullfilled: new Date(2019, 12, 25)},
    

  ];

  ngOnInit() {
  }

}
