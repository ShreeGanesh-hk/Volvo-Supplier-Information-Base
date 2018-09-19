import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAuditsComponent } from './supplier-audits.component';

describe('SupplierAuditsComponent', () => {
  let component: SupplierAuditsComponent;
  let fixture: ComponentFixture<SupplierAuditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierAuditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
