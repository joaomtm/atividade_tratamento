import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCultureComponent } from './kpi-culture.component';

describe('KpiCultureComponent', () => {
  let component: KpiCultureComponent;
  let fixture: ComponentFixture<KpiCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiCultureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KpiCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
