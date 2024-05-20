import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddmenuitemComponent } from './adminaddmenuitem.component';

describe('AdminaddmenuitemComponent', () => {
  let component: AdminaddmenuitemComponent;
  let fixture: ComponentFixture<AdminaddmenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminaddmenuitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminaddmenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
