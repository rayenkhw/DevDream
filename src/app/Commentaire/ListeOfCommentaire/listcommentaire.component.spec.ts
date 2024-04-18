import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommentaireComponent } from './listcommentaire.component';

describe('ListcommentaireComponent', () => {
  let component: ListcommentaireComponent;
  let fixture: ComponentFixture<ListcommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
