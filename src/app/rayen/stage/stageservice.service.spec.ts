import { TestBed } from '@angular/core/testing';

import { StageserviceService } from './stageservice.service';

describe('StageserviceService', () => {
  let service: StageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
