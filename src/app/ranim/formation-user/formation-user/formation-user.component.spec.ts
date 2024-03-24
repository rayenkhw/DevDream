import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationUserComponent } from './formation-user.component';

describe('FormationUserComponent', () => {
  let component: FormationUserComponent;
  let fixture: ComponentFixture<FormationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
