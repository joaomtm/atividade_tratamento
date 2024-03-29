import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiNoteComponent } from './kpi-note.component';

describe('KpiNoteComponent', () => {
  let component: KpiNoteComponent;
  let fixture: ComponentFixture<KpiNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KpiNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
