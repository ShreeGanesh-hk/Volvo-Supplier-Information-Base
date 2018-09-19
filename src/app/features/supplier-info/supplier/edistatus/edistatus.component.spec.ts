import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdistatusComponent } from './edistatus.component';

describe('EdistatusComponent', () => {
  let component: EdistatusComponent;
  let fixture: ComponentFixture<EdistatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdistatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdistatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
