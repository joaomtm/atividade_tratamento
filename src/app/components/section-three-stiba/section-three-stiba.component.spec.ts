import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeStibaComponent } from './section-three-stiba.component';

describe('SectionThreeStibaComponent', () => {
  let component: SectionThreeStibaComponent;
  let fixture: ComponentFixture<SectionThreeStibaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionThreeStibaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionThreeStibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
