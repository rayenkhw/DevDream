import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstageComponent } from './allstage.component';

describe('AllstageComponent', () => {
  let component: AllstageComponent;
  let fixture: ComponentFixture<AllstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
