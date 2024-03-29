import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptwComponent } from './gptw.component';

describe('GptwComponent', () => {
  let component: GptwComponent;
  let fixture: ComponentFixture<GptwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GptwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GptwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
