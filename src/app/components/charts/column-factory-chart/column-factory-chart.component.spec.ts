import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFactoryChartComponent } from './column-factory-chart.component';

describe('ColumnFactoryChartComponent', () => {
  let component: ColumnFactoryChartComponent;
  let fixture: ComponentFixture<ColumnFactoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnFactoryChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnFactoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});