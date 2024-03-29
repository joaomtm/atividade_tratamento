import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Score3Component } from './score3.component';

describe('Score3Component', () => {
  let component: Score3Component;
  let fixture: ComponentFixture<Score3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Score3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Score3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
