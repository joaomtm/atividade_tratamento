import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Score5Component } from './score5.component';

describe('Score5Component', () => {
  let component: Score5Component;
  let fixture: ComponentFixture<Score5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Score5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Score5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
