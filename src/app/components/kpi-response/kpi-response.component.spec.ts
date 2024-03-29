import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiResponseComponent } from './kpi-response.component';

describe('KpiResponseComponent', () => {
  let component: KpiResponseComponent;
  let fixture: ComponentFixture<KpiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KpiResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
