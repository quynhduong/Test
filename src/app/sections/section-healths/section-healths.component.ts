import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'SM01', isOnline: true},
  {id: 2, name: 'SM02', isOnline: false},
  {id: 3, name: 'SM03', isOnline: true},
  {id: 4, name: 'SM04', isOnline: true}


];

@Component({
  selector: 'app-section-healths',
  templateUrl: './section-healths.component.html',
  styleUrls: ['./section-healths.component.css']
})
export class SectionHealthsComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
