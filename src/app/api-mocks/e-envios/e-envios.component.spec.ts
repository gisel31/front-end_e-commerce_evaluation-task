import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEnviosComponent } from './e-envios.component';

describe('EEnviosComponent', () => {
  let component: EEnviosComponent;
  let fixture: ComponentFixture<EEnviosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EEnviosComponent]
    });
    fixture = TestBed.createComponent(EEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
