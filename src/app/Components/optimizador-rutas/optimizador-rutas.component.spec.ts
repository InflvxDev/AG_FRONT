import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizadorRutasComponent } from './optimizador-rutas.component';

describe('OptimizadorRutasComponent', () => {
  let component: OptimizadorRutasComponent;
  let fixture: ComponentFixture<OptimizadorRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizadorRutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizadorRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
