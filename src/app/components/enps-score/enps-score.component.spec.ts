import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnpsScoreComponent } from './enps-score.component';

describe('EnpsScoreComponent', () => {
  let component: EnpsScoreComponent;
  let fixture: ComponentFixture<EnpsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnpsScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnpsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
