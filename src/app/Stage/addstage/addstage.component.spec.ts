import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstageComponent } from './addstage.component';

describe('AddstageComponent', () => {
  let component: AddstageComponent;
  let fixture: ComponentFixture<AddstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
