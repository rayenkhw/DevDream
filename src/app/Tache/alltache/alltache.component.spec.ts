import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltacheComponent } from './alltache.component';

describe('AlltacheComponent', () => {
  let component: AlltacheComponent;
  let fixture: ComponentFixture<AlltacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
