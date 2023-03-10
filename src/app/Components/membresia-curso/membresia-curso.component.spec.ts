import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaCursoComponent } from './membresia-curso.component';

describe('MembresiaCursoComponent', () => {
  let component: MembresiaCursoComponent;
  let fixture: ComponentFixture<MembresiaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresiaCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
