import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEasyGoComponent } from './section-easy-go.component';

describe('SectionEasyGoComponent', () => {
  let component: SectionEasyGoComponent;
  let fixture: ComponentFixture<SectionEasyGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEasyGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEasyGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
