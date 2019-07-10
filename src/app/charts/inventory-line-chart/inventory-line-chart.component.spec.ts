import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryLineChartComponent } from './inventory-line-chart.component';

describe('InventoryLineChartComponent', () => {
  let component: InventoryLineChartComponent;
  let fixture: ComponentFixture<InventoryLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
