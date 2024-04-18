import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreUserComponent } from './offre-user.component';

describe('OffreUserComponent', () => {
  let component: OffreUserComponent;
  let fixture: ComponentFixture<OffreUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
