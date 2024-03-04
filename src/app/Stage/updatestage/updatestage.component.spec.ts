import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestageComponent } from './updatestage.component';

describe('UpdatestageComponent', () => {
  let component: UpdatestageComponent;
  let fixture: ComponentFixture<UpdatestageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
