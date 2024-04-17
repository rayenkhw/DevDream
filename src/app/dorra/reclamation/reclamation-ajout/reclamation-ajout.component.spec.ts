import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationAjoutComponent } from './reclamation-ajout.component';

describe('ReclamationAjoutComponent', () => {
  let component: ReclamationAjoutComponent;
  let fixture: ComponentFixture<ReclamationAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
