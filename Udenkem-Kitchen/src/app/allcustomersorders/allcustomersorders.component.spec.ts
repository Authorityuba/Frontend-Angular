import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcustomersordersComponent } from './allcustomersorders.component';

describe('AllcustomersordersComponent', () => {
  let component: AllcustomersordersComponent;
  let fixture: ComponentFixture<AllcustomersordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllcustomersordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllcustomersordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
