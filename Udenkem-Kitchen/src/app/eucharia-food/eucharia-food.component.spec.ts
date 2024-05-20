import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuchariaFoodComponent } from './eucharia-food.component';

describe('EuchariaFoodComponent', () => {
  let component: EuchariaFoodComponent;
  let fixture: ComponentFixture<EuchariaFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EuchariaFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuchariaFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
