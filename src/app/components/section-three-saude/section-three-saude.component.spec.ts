import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeSaudeComponent } from './section-three-saude.component';

describe('SectionThreeSaudeComponent', () => {
  let component: SectionThreeSaudeComponent;
  let fixture: ComponentFixture<SectionThreeSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionThreeSaudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionThreeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});