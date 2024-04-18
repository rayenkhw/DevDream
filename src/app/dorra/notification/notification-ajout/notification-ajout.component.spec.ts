import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAjoutComponent } from './notification-ajout.component';

describe('NotificationAjoutComponent', () => {
  let component: NotificationAjoutComponent;
  let fixture: ComponentFixture<NotificationAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
