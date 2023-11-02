import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFacturaComponent } from './e-factura.component';

describe('EFacturaComponent', () => {
  let component: EFacturaComponent;
  let fixture: ComponentFixture<EFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EFacturaComponent]
    });
    fixture = TestBed.createComponent(EFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
