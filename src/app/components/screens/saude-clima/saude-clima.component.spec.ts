import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeClimaComponent } from './saude-clima.component';

describe('SaudeClimaComponent', () => {
  let component: SaudeClimaComponent;
  let fixture: ComponentFixture<SaudeClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudeClimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaudeClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
