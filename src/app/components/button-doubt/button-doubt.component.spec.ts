import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDoubtComponent } from './button-doubt.component';

describe('ButtonDoubtComponent', () => {
  let component: ButtonDoubtComponent;
  let fixture: ComponentFixture<ButtonDoubtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDoubtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
