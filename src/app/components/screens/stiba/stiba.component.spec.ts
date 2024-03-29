import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StibaComponent } from './stiba.component';

describe('StibaComponent', () => {
  let component: StibaComponent;
  let fixture: ComponentFixture<StibaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StibaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
