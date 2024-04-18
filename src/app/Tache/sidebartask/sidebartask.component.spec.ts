import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartaskComponent } from './sidebartask.component';

describe('SidebartaskComponent', () => {
  let component: SidebartaskComponent;
  let fixture: ComponentFixture<SidebartaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebartaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
