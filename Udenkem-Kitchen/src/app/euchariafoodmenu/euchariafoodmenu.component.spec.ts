import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuchariafoodmenuComponent } from './euchariafoodmenu.component';

describe('EuchariafoodmenuComponent', () => {
  let component: EuchariafoodmenuComponent;
  let fixture: ComponentFixture<EuchariafoodmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EuchariafoodmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuchariafoodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
