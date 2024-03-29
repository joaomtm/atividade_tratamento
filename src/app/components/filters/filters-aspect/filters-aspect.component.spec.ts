import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersAspectComponent } from './filters-aspect.component';

describe('FiltersAspectComponent', () => {
  let component: FiltersAspectComponent;
  let fixture: ComponentFixture<FiltersAspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersAspectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersAspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});