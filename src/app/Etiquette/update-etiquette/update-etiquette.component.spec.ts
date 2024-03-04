import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtiquetteComponent } from './update-etiquette.component';

describe('UpdateEtiquetteComponent', () => {
  let component: UpdateEtiquetteComponent;
  let fixture: ComponentFixture<UpdateEtiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtiquetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
