import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgboFoodComponent } from './igbo-food.component';

describe('IgboFoodComponent', () => {
  let component: IgboFoodComponent;
  let fixture: ComponentFixture<IgboFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IgboFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IgboFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
