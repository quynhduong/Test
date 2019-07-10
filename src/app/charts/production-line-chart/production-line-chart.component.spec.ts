import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineChartComponent } from './production-line-chart.component';

describe('ProductionLineChartComponent', () => {
  let component: ProductionLineChartComponent;
  let fixture: ComponentFixture<ProductionLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
