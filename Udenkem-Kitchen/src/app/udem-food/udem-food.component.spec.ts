import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemFoodComponent } from './udem-food.component';

describe('UdemFoodComponent', () => {
  let component: UdemFoodComponent;
  let fixture: ComponentFixture<UdemFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UdemFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UdemFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
