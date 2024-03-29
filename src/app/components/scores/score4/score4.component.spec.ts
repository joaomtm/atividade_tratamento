import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Score4Component } from './score4.component';

describe('Score4Component', () => {
  let component: Score4Component;
  let fixture: ComponentFixture<Score4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Score4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Score4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
