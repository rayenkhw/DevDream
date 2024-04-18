import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtachencadrantComponent } from './detailtachencadrant.component';

describe('DetailtachencadrantComponent', () => {
  let component: DetailtachencadrantComponent;
  let fixture: ComponentFixture<DetailtachencadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtachencadrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailtachencadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
