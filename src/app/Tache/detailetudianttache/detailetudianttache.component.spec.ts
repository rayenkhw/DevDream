import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailetudianttacheComponent } from './detailetudianttache.component';

describe('DetailetudianttacheComponent', () => {
  let component: DetailetudianttacheComponent;
  let fixture: ComponentFixture<DetailetudianttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailetudianttacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailetudianttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
