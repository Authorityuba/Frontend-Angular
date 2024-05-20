import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyorderComponent } from './view-myorder.component';

describe('ViewMyorderComponent', () => {
  let component: ViewMyorderComponent;
  let fixture: ComponentFixture<ViewMyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMyorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
