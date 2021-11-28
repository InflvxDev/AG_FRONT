import { TestBed } from '@angular/core/testing';

import { OptimizadorRutasAGService } from './optimizador-rutas-ag.service';

describe('OptimizadorRutasAGService', () => {
  let service: OptimizadorRutasAGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimizadorRutasAGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
