import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPagoComponent } from './tarjeta-pago.component';

describe('TarjetaPagoComponent', () => {
  let component: TarjetaPagoComponent;
  let fixture: ComponentFixture<TarjetaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
