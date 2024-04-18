import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhofraneComponent } from './ghofrane.component';

describe('GhofraneComponent', () => {
  let component: GhofraneComponent;
  let fixture: ComponentFixture<GhofraneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhofraneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhofraneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
