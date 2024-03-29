import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoSaudeComponent } from './section-two-saude.component';

describe('SectionTwoSaudeComponent', () => {
  let component: SectionTwoSaudeComponent;
  let fixture: ComponentFixture<SectionTwoSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTwoSaudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTwoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});