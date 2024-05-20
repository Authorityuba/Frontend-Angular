import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatemenuitemComponent } from './adminupdatemenuitem.component';

describe('AdminupdatemenuitemComponent', () => {
  let component: AdminupdatemenuitemComponent;
  let fixture: ComponentFixture<AdminupdatemenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminupdatemenuitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminupdatemenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
