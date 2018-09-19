import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierBusinessComponent } from './supplier-business.component';

describe('SupplierBusinessComponent', () => {
  let component: SupplierBusinessComponent;
  let fixture: ComponentFixture<SupplierBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
