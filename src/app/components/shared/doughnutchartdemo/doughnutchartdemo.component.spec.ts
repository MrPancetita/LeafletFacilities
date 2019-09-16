import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutchartdemoComponent } from './doughnutchartdemo.component';

describe('DoughnutchartdemoComponent', () => {
  let component: DoughnutchartdemoComponent;
  let fixture: ComponentFixture<DoughnutchartdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutchartdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutchartdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
