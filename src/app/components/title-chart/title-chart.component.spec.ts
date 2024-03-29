import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleChartComponent } from './title-chart.component';

describe('TitleChartComponent', () => {
  let component: TitleChartComponent;
  let fixture: ComponentFixture<TitleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
