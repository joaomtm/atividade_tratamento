import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Score2Component } from './score2.component';

describe('Score2Component', () => {
  let component: Score2Component;
  let fixture: ComponentFixture<Score2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Score2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Score2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
