import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidfComponent } from './cidf.component';

describe('CidfComponent', () => {
  let component: CidfComponent;
  let fixture: ComponentFixture<CidfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidfComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CidfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});