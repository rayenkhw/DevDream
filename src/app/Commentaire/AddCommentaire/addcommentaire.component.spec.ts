import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommentaireComponent } from './addcommentaire.component';

describe('AddcommentaireComponent', () => {
  let component: AddcommentaireComponent;
  let fixture: ComponentFixture<AddcommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
