import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Score1Component } from './score1.component';

describe('Score1Component', () => {
  let component: Score1Component;
  let fixture: ComponentFixture<Score1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Score1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Score1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
