import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductionsComponent } from './section-productions.component';

describe('SectionProductionsComponent', () => {
  let component: SectionProductionsComponent;
  let fixture: ComponentFixture<SectionProductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionProductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
