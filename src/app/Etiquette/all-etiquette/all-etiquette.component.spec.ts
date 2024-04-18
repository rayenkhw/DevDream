import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEtiquetteComponent } from './all-etiquette.component';

describe('AllEtiquetteComponent', () => {
  let component: AllEtiquetteComponent;
  let fixture: ComponentFixture<AllEtiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEtiquetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
