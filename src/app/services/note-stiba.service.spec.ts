import { TestBed } from '@angular/core/testing';

import { NoteStibaService } from './note-stiba.service';

describe('NoteStibaService', () => {
  let service: NoteStibaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteStibaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
