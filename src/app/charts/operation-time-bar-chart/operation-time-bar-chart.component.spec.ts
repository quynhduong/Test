import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationTimeBarChartComponent } from './operation-time-bar-chart.component';

describe('OperationTimeBarChartComponent', () => {
  let component: OperationTimeBarChartComponent;
  let fixture: ComponentFixture<OperationTimeBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationTimeBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationTimeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
