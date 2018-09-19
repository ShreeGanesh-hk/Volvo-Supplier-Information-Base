import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSalesComponent } from './supplier-sales.component';

describe('SupplierSalesComponent', () => {
  let component: SupplierSalesComponent;
  let fixture: ComponentFixture<SupplierSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
