import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFormationComponent } from './afficher-formation.component';

describe('AfficherFormationComponent', () => {
  let component: AfficherFormationComponent;
  let fixture: ComponentFixture<AfficherFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
