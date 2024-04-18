import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseAjoutComponent } from './reponse-ajout.component';

describe('ReponseAjoutComponent', () => {
  let component: ReponseAjoutComponent;
  let fixture: ComponentFixture<ReponseAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReponseAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
