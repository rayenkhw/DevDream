import { TestBed } from '@angular/core/testing';
import { StageService } from 'app/Services/StageService/stage.service';


describe('StageService', () => {
  let service: StageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});