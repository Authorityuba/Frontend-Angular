import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuchariafindfoodmenuitemComponent } from './euchariafindfoodmenuitem.component';

describe('EuchariafindfoodmenuitemComponent', () => {
  let component: EuchariafindfoodmenuitemComponent;
  let fixture: ComponentFixture<EuchariafindfoodmenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EuchariafindfoodmenuitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuchariafindfoodmenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
