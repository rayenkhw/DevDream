import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtiquetteComponent } from './add-etiquette.component';

describe('AddEtiquetteComponent', () => {
  let component: AddEtiquetteComponent;
  let fixture: ComponentFixture<AddEtiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtiquetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
