import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeletemenuitemComponent } from './admindeletemenuitem.component';

describe('AdmindeletemenuitemComponent', () => {
  let component: AdmindeletemenuitemComponent;
  let fixture: ComponentFixture<AdmindeletemenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindeletemenuitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindeletemenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
