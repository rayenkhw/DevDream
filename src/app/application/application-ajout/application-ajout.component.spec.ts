import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAjoutComponent } from './application-ajout.component';

describe('ApplicationAjoutComponent', () => {
  let component: ApplicationAjoutComponent;
  let fixture: ComponentFixture<ApplicationAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
